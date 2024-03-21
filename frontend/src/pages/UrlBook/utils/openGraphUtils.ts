// pages/urlBook/utils/opeGraphUtils.ts

import axios from 'axios';
import cheerio from 'cheerio';

// URL로부터 Open Graph 데이터를 가져오는 함수
async function fetchOpenGraphData(url: string): Promise<{ title: string; plot: string; thumbnail: string } | null> {
    try {
      const response = await axios.get(url);

      // const response = await axios.get(url, {
      //   headers: {
      //     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
      //   }
      // });    
    const html = response.data;
    const $ = cheerio.load(html) as cheerio.Root;

    // Open Graph 메타 데이터 추출
    const ogTitle = $('meta[property="og:title"]').attr('content');
    const ogDescription = $('meta[property="og:description"]').attr('content');
    const ogImage = $('meta[property="og:image"]').attr('content');

    return {
      title: ogTitle || '',
      plot: ogDescription || '',
      thumbnail: ogImage || ''
    };
  } catch (error) {
    console.error('Error fetching Open Graph data:', error);
    return null;
  }
}

export default fetchOpenGraphData