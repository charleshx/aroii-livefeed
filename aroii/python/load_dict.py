import pickle
import sys
def save_obj(obj, name ):
    with open(name + '.pkl', 'wb') as f:
        pickle.dump(obj, f, pickle.HIGHEST_PROTOCOL)

def load_obj(name ):
    with open(name + '.pkl', 'rb') as f:
        return pickle.load(f)
        
D = load_obj('reviewpostTags')

#if __name__ == '__main__':
#    vv = sys.argv[0]
#    if vv == '-l':
#        name = sys.argv[1]
#        load_obj(name)
#        
#    else: print('Invalid argument given')
