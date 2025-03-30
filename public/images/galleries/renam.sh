#!/bin/bash
# filepath: rename_photos.sh

# Navigate to the galleries directory

# Counter for naming files
count=1

# Loop through all jpeg files in the directory
for file in *.jpeg *.jpg; do
  # Skip if no files match the pattern
  [ -e "$file" ] || continue
  
  # Create new filename with padding zeros
  newname=$(printf "%04d.jpeg" $count)
  
  # Rename the file
  mv "$file" "$newname"
  
  # Increment counter
  ((count++))
done

echo "Renamed $(($count-1)) files"
