#!/usr/bin/env python
import hashlib
import random
import sys
import os
import string

if len(sys.argv) != 2:
  print "Usage:", sys.argv[0], "\"write here a desired hash ending\""
  sys.exit()

postfix = sys.argv[1].lower()

if not all(c in string.hexdigits for c in postfix):
  print "Your hash ending is not in HEX."
  sys.exit()

if len(postfix) > 20:
  print "Too long hash ending."
  sys.exit()

word_file = "/usr/share/dict/words"
WORDS = open(word_file).read().splitlines()
count = 0

while (count < 1000000):
  count = count + 1
  str = random.choice(WORDS)+"_"+random.choice(WORDS)+"_"+random.choice(WORDS)
  str = str.replace("'s", "")
  hash = hashlib.sha256(str).hexdigest()

  if hash[-len(postfix):] == postfix:
    print str, " : ", hash
    sys.exit()

print "Tried 1 million random strings and hash had not found. Try again."
