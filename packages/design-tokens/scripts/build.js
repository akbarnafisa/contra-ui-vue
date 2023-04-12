import { join } from 'path';
import fs from 'fs-extra';
import postcss from 'postcss';

import { onComplete, onSection, onValue } from './output-css.js';

const OUTPUT_PATH = './dist';

main();

async function main() {
  const { default: getTokens } = await import('../src/tokens.js');
  let root = postcss.rule({ selector: ':root' });
  let variant = [];

  const tokens = getTokens();
  await fs.emptyDir(OUTPUT_PATH);
  await fs.mkdirp(OUTPUT_PATH);
  try {
    Object.keys(tokens).forEach((categoryName) => {
      const section = tokens[categoryName];

      Object.keys(section).forEach((sectionName) => {
        const values = section[sectionName];
        if (values == null) {
          return;
        }

        const { selectors, selector } = onSection({
          categoryName,
          sectionName,
          tokens,
        });

        if (selector) {
          variant.push(selector);
        } else {
          variant = [...variant, ...selectors];
        }

        Object.keys(values).forEach((key) => {
          const value = values[key];
          root.append(
            onValue({
              categoryName,
              sectionName,
              key,
              value,
              tokens,
            })
          );
        });
      });
    });

    const content = onComplete({
      root,
      variant: variant.filter(Boolean),
    });

    await fs.writeFile(join(OUTPUT_PATH, `global-tokens.css`), content);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}
