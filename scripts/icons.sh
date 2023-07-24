#!/bin/bash

for size in 16 19 48 128
do
    inkscape -w $size -h $size logo.svg -o icon$size.png
done

inkscape -w 1024 logo.svg -o logo.png
