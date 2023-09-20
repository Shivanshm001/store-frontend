#!/bin/bash

echo "Current working directory : "
pwd

function get_confirmation() {
    echo -n "$i"
    read input
    # Convert input to lowercase
    input=$(echo "$input" | tr '[:upper:]' '[:lower:]')
    if [[ "$input" == "n" ]]; then
        exit
    fi
}

git status

get_confirmation "Continue? (y/n)? : "

echo -e "\nAdding changes...\n"
git add .

get_confirmation "Commit changes? (y/n) : "
echo
echo -n "Enter commit message : "
read message
echo "Committing changes... "

sleep 2

git commit -m "$message"

get_confirmation "Push to current active repo? (y/n)? : "
sleep 2
git push -u origin
