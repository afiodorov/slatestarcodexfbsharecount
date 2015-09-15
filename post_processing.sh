#!/bin/bash

FILE="${1}"
TEMPFILE="/tmp/links"

cat "${FILE}" | sed s/K+$/000/ | sort -t',' -k 2 -r -n | sed s/000$/K+/ > "${TEMPFILE}"
echo "| Link | Number of FB shares |"
echo "|------+---------------------|"
awk 'BEGIN { FS = "," }; {print "| ["$1"]("$1") | "$2" |"}' ${TEMPFILE}
