# pip install twder
# urllib.error.URLError: <urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: self signed certificate in certificate chain (_ssl.c:997)>
import pandas
import twder

print(twder.now_all())
print(pandas.DataFrame(twder.now_all()))
print(pandas.DataFrame(twder.now_all()).transpose())
