#!/bin/bash

PI=3.141592653589793
LON=$1
LAT=$2
THETA=`echo "scale=8;$LAT/180*$PI"|bc`
PHI=`echo "scale=8;$LON/180*$PI"|bc`

echo $THETA $PHI | proj +proj=healpix -f '%.8f' +lon_0=0 +a=1 -E
