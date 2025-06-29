import pandas as pd

data = pd.read_csv('coa_active.csv')

months = {
    'tammikuuta': '01',
    'helmikuuta': '02',
    'maaliskuuta': '03',
    'huhtikuuta': '04',
    'toukokuuta': '05',
    'kesäkuuta': '06',
    'heinäkuuta': '07',
    'elokuuta': '08',
    'syyskuuta': '09',
    'lokakuuta': '10',
    'marraskuuta': '11',
    'joulukuuta': '12',
}

def convert(date):
    split_date = date.split(' ')
    if (len(split_date) != 3):
        return '1309'
    
    month = months[split_date[1]]
    day = split_date[0].replace('.', '')
    if len(day) == 1:
        day = '0' + day

    output = '-'.join([split_date[2], month, day])
    return output

data['date'] = data['date_granted'].apply(convert)

# drop date_granted column
data.drop(columns=['date_granted'], inplace=True)

data.to_csv('coa_active.csv', index=False)
