#!/bin/bash
formatted_date=$(echo "$CI_COMMIT_TIMESTAMP" | sed 's/T//; s/+00:00//; s/-//g')
##2023081509:30:51##

timeall=$(awk '{print substr($0, 1, 8)}' <<< "$formatted_date")
##20230815##

timeall=$(awk '{print substr($0, 1, 8)}' <<< "$formatted_date")
##20230815##

timehourall=$(awk '{print substr($0, 9, 10)}' <<< "$formatted_date")
##09:30:51##

timehour=$(awk '{print substr($0, 1, 2)}' <<< "$timehourall" | sed 's/^0//')  # Remove leading zeros
# Add 7 to the extracted hour
timehoursum=$((10#$timehour + 7))  # Specify base 10 for arithmetic

timeminute=$(awk '{print substr($0, 4, 2)}' <<< "$timehourall")
##30##

day=$(awk '{print substr($0, 7, 8)}' <<< "$timeall")
##15##
if ((timehoursum >= 24)); then
    daysum=$((day + 1))
    timehoursum=$((timehoursum - 24))
else
    daysum=$day
fi

month=$(awk '{print substr($0, 5, 2)}' <<< "$timeall")
##08##

year=$(awk '{print substr($0, 1, 4)}' <<< "$timeall")
##2023#

formatted_timestamp="$year$month$daysum-$timehoursum$timeminute"
echo "$formatted_timestamp" > build_artifact.txt