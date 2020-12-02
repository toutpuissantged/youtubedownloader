def coreInit(url):
    try:
        from pytube import YouTube
        yt = YouTube(url)
        yt.streams.all()
        #print(yt.title,yt.thumbnail_url, yt.streams.all())
        return [yt.title,yt.thumbnail_url,yt.streams[0].url]
    except:
        return ['none']

#init('https://www.youtube.com/watch?v=NecnMaux3ao&ab_channel=NalaK')