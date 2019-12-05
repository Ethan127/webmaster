#!/bin/bash

function dirChange {
  projectDir="$(cd -P -- "$(dirname -- "$0")" && pwd -P)"
  cd $projectDir
}

function join {
  local IFS="$1"; shift; echo "$*";
}

while :
do

  echo "Would you like to update the master (a), update your local directory (b), or exit (exit or c)?"
  read option

  if test "$option" == "a"
  then
    dirChange
    echo "What is your commit message?"
    read -a commitM
    git add -A
    git commit -m "$(join " " ${commitM[@]})"
    git push
  fi

  if test "$option" == "b"
  then
    dirChange
    git pull --allow-unrelated-histories
  fi

  if test "$option" == "exit" || test "$option" == "c"
  then
    break
    exit
  fi

done
