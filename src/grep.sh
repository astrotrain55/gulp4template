#!/bin/bash

# Раскраска вывода
export GREP_OPTIONS='--color=always'

# Ищем в каталоге
cd ${PWD}

# Список каталогов, в которых искать не нужно
for var in node_modules vendor svg; do
  exclude=$exclude"--exclude-dir="$var" "
done

# Параметры вывода
if   [[ "list" == *"$1"* ]]; then # Список файлов
  grep --exclude=package-lock.json $exclude -Hrwl $2
elif [[ "full" == *"$1"* ]]; then # Подробно
  grep --exclude=package-lock.json $exclude -Hrnw $2
fi

exit 0
