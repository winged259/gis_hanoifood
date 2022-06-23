import pandas as pd

def convert_to_array(v):
        return [s.strip() for s in v.split(',') if s.strip()]

df = pd.read_csv('/Users/duynguyen/Documents/GIS/hanoi_eating_1.csv',index_col=0,converters={'foods': convert_to_array,'drinks': convert_to_array})
df.columns = [c.lower() for c in df.columns] # PostgreSQL doesn't like capitals or spaces
import sqlalchemy
from sqlalchemy import create_engine
engine = create_engine('postgresql://postgres:depvaomat01@localhost:5432/project-gis')




df.to_sql("hanoi_restaurant",
          engine,
          if_exists="append",  # Options are ‘fail’, ‘replace’, ‘append’, default ‘fail’
          index = False, # Do not output the index of the dataframe
          dtype = {'name': sqlalchemy.types.UnicodeText,
                   'geom': sqlalchemy.types.String,
                   'x': sqlalchemy.types.Float,
                   'y': sqlalchemy.types.Float,
                   'url': sqlalchemy.types.Text,
                   'rating': sqlalchemy.types.Integer,
                   'foods': sqlalchemy.types.ARRAY(sqlalchemy.types.Text),
                   'drinks': sqlalchemy.types.ARRAY(sqlalchemy.types.Text)})