#pip install finnhub-python
import finnhub

# Setup client
finnhub_client = finnhub.Client(api_key="bs8g407rh5r8i6g9ii8g")

# Stock candles
res = finnhub_client.stock_candles('AAPL', 'D', 1590988249, 1591852249)
print(res)

#Convert to Pandas Dataframe
import pandas as pd
print(pd.DataFrame(res))