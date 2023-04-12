import postcss from 'postcss';
import map from 'lodash/map.js';
import kebabCase from 'lodash/kebabCase.js';
import {
  NAMESPACE_PREFIX,
  SPACING,
  TYPOGRAPHY,
  TYPE_VARIANT,
  COLOR,
} from '../src/tokens.js';
import { RADIUS } from '../src/tokens.js';

const pxToRem = (x) => `${x / 16}rem`;
const px = (x) => `${x}px`;

const fontKeyPropMap = {
  family: 'font-family',
  size: 'font-size',
  weight: 'font-weight',
  lineHeight: 'line-height',
  letterSpacing: 'letter-spacing',
};

export const onSection = ({ categoryName, sectionName, tokens }) => {
  let selector;
  let selectors = [];
  const path = [categoryName, sectionName];
  const values = tokens[categoryName][sectionName];

  if (categoryName === TYPE_VARIANT) {
    selector = postcss.rule({
      selector: `.c-font-variant-${kebabCase(sectionName)}`,
    });
    const declarations = getFontVariantDeclarations(path, values);
    selector.append(declarations);
  } else if (categoryName === COLOR) {
    const colorProps = {
      background: {
        prefix: 'bg',
        props: 'background-color',
      },
      text: {
        prefix: 'text',
        props: 'color',
      },
      DEFAULT: {
        prefix: 'text',
        props: 'color',
      },
    };

    Object.keys(values).forEach((key) => {
      const currentStyle = postcss.rule({
        selector: `.c-${colorProps[sectionName].prefix}-${kebabCase(key)}`,
      });
      const { prop: variableName, value: actualValue } = getDeclaration(
        path,
        key,
        values[key]
      );
      currentStyle.append(
        postcss.decl({
          prop: colorProps[sectionName].props,
          value: `var(${variableName}, ${actualValue})`,
        })
      );
      selectors.push(currentStyle);
    });
  } else if (categoryName === SPACING) {
    Object.keys(values).forEach((key) => {
      const allPrefix = [
        'p',
        'py',
        'px',
        'pt',
        'pb',
        'pr',
        'pl',
        'm',
        'my',
        'mx',
        'mt',
        'mb',
        'mr',
        'ml',
      ];
      const spaceProps = {
        p: ['padding'],
        py: ['padding-top', 'padding-bottom'],
        px: ['padding-left', 'padding-right'],
        pt: ['padding-top'],
        pb: ['padding-bottom'],
        pr: ['padding-right'],
        pl: ['padding-left'],
        m: ['margin'],
        my: ['margin-top', 'margin-bottom'],
        mx: ['margin-left', 'margin-right'],
        mt: ['margin-top'],
        mb: ['margin-bottom'],
        mr: ['margin-right'],
        ml: ['margin-left'],
      };
      allPrefix.forEach((prefix) => {
        const space = postcss.rule({
          selector: `.c-${prefix}-${kebabCase(key)}`,
        });
        const { prop: variableName, value: actualValue } = getDeclaration(
          path,
          key,
          values[key]
        );
        space.append(
          spaceProps[prefix].map((prop) =>
            postcss.decl({
              prop,
              value: `var(${variableName}, ${actualValue})`,
            })
          )
        );
        selectors.push(space);
      });
    });
  }

  return {
    selector,
    selectors,
  };
};

export const onValue = ({ categoryName, sectionName, key, value }) => {
  const path = [categoryName, sectionName];

  return getDeclaration(path, key, value);
};

export const onComplete = ({ root, variant }) => {
  return postcss
    .root()
    .append([root, ...variant])
    .toString();
};

function getDeclaration(path, key, val) {
  const pathString = path
    .filter((x) => x !== 'DEFAULT')
    .map(kebabCase)
    .join('-');

  return postcss.decl({
    prop: `--${NAMESPACE_PREFIX}-${pathString}-${kebabCase(key)}`,
    value: processValue(path, key, val),
  });
}

function getFontVariantDeclarations(path, values) {
  return map(values, (value, key) => {
    const { prop: variableName, value: actualValue } = getDeclaration(
      path,
      key,
      value
    );
    return postcss.decl({
      prop: fontKeyPropMap[key],
      value: `var(${variableName}, ${actualValue})`,
    });
  });
}

function processValue(path, key, val) {
  if (val == null) {
    return '';
  }
  const [categoryName, sectionName] = path;

  if (categoryName === SPACING) {
    return pxToRem(val);
  }

  if (categoryName === TYPOGRAPHY || categoryName === TYPE_VARIANT) {
    const nameOrKey = categoryName === TYPOGRAPHY ? sectionName : key;
    switch (nameOrKey) {
      case 'size':
        return pxToRem(val);
      default:
        return val;
    }
  }

  if (categoryName === RADIUS) {
    return px(val);
  }

  return val;
}
