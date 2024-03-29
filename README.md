# example_crawler
### Bài toán:
Lấy dữ liệu các tin mới trong trang chủ của http://cafebiz.vn/

### 1. Lựa chọn công nghệ:
Tìm các tool, open source phù hợp để đẩy nhanh việc thực hiện crawler data. Có thể tham khảo các tool sau:
* Danh sách các tool đã được tổng hợp https://github.com/BruceDone/awesome-crawler
* http://www.nightmarejs.org
* https://developers.google.com/web/tools/puppeteer/
* …

### 2. Các bước thực hiện:
* Sử dụng ngôn ngữ nodejs
* Sử dụng tool https://github.com/bda-research/node-crawler
* Code truy cập vào http://cafebiz.vn/ rồi parse data html trả về
* Lưu vào database mongodb

### 3. Kết quả lưu vào mongodb như hình
**Website**

<kbd><img title="Website" src="https://raw.githubusercontent.com/namntdev/example_crawler/master/website.png"></kbd><br/>

**Result in database**

<kbd><img title="Result in database" src="https://raw.githubusercontent.com/namntdev/example_crawler/master/result.png"></kbd><br/>