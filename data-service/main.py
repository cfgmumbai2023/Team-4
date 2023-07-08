import csv
import os
import pandas as pd

from pytube import Playlist, YouTube
# IMPORTS ABOVE

NGO_NAME = "avanti-sankalp"
CHAP_NAME = "Is Matter Around Us Pure"
URL_PLAYLIST = "https://www.youtube.com/playlist?list=PL3rEvTTL-Jm8DDylCrgqIhCLb9Nj7t68j"
WRITE_PATH = f'outputs/{NGO_NAME}-{CHAP_NAME}.csv'

def get_playlist_details(playlist_url: str):
  # Retrieve URLs of videos from playlist
  playlist = Playlist(playlist_url)
  print('Number Of Videos In playlist: %s' % len(playlist.video_urls))

  urls = []
  for url in playlist:
    curr_video = {}
    curr_video['url'] = url

    yt = YouTube(url)
    curr_video['title'] = yt.title
    # curr_video['keywords'] = yt.keywords
    # curr_video['rating'] = yt.rating
    curr_video['author'] = yt.author
    curr_video['desc'] = yt.description
    curr_video['views'] = yt.views

    urls.append(curr_video)

  return urls

# def 

def dicts_to_csv(dics_list, write_path):
  # Extract the keys from the first dictionary in the list
  keys = dics_list[0].keys()

  if os.path.exists(write_path):
    raise FileExistsError("File exists")

  with open(write_path, 'w+', newline='', encoding='utf-8') as output_file:
      dict_writer = csv.DictWriter(output_file, keys)
      dict_writer.writeheader()
      dict_writer.writerows(dics_list)

def main():
  dics_list = get_playlist_details(URL_PLAYLIST)
  dicts_to_csv(dics_list, WRITE_PATH)

  df = pd.read_csv(WRITE_PATH)
  df['lang'] = 'hindi'
  df['grade'] = 9
  df['subject'] = 'science'
  df['chapter'] = CHAP_NAME

  df.to_csv(WRITE_PATH)

if __name__ == '__main__':
  main()
  

