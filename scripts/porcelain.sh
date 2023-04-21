echo "--------"
echo "Checking for uncommitted build outputs..."
if [ -z "$(git status --porcelain)" ];
then
    echo "Working copy is clean"
else
    echo "Another Pull Request has been created. Please check it to accept or reject the visual changes."
    git status
    exit 1
fi
