# how_partials_work.py by @pydanny
from functools import partial
    
square = partial(pow, exp=2)
cube = partial(pow, exp=3)

assert square(2) == 4
assert cube(2) == 8 

