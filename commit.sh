#!/bin/bash

echo "Current working directory : "
pwd

echo "Continue? (y/n) : "
read input

# Convert input to lowercase
input=$(echo "$input" | tr '[:upper:]' '[:lower:]')

if [[ "$input" == "n" ]]; then
    exit
else
    git status

    echo -e "Adding files...\n"
    git add .

    echo "Enter commit message : "
    read message

    echo "Committing changes... "

    echo "Push to git repo? (y/n) : "
    read push

    # Convert push to lowercase
    push=$(echo "$push" | tr '[:upper:]' '[:lower:]')

    if [[ "$push" == "y" ]]; then
        git commit -m "$message"
        git push -u origin
    else
        exit
    fi
fi
