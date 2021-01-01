/**
 * 1: Khởi động Mongodb: mongod
 * 2: Bắt đầu truy vấn, tạo 1 cửa sổ cmd mới và gõ: mongo
 * 3: Hiển thị tất cả db: show dbs
 * 4: Có 2 tác dụng, nếu có sẽ đi vào và sử dụng db đó, còn chưa có sẽ tạo db mới: use <tên db>
 * 5: Hiển thị tất cả collections có trong db đó: show collections
 * 6: Tạo một collections trong db đang sử dụng: db.createCollection('<tên collection>')
 * 7: Xóa db(trước đó phải use trước): db.dropDatabase();
 * 
 * 
 * Cách đưa dữ liệu vào MongoDB
 * 8: Thêm các field, value vào collection db.<tên Collection>.insert(<dữ liệu dạng JSON>)
 * 
 * Cách đọc dữ liệu field, value trong collection
 * 9: db.<tên Collection>.find()
 *    db.<tên Collection>.find().pretty(): dữ liệu hiển thị đẹp hơn
 * 
 * 
 * Cách updated dữ liệu, multi: true là update nhiều trường, false là update trường đầu tiên tìm thấy ở điều kiện,
 * $set: là đặt lại giá trị, $unset là xóa field đấy đi, $rename: là đổi tên của field
 * upsert: true: nếu field ở phần điều kiện không có nó sẽ tự thêm một document mới có 2 field là điều kiện và dữ liệu muốn update, còn nếu là false: thì nếu không thấy nó sẽ bỏ qua không làm gì cả, mặc định là false
 * Nếu không có điều kiện (phải để là {}) thì sẽ update tất cả

 * db.<tên Collection>.update({<tìm dữ liệu dựa vào một field nào đó>}, {$(set || unset || rename): {<dữ liệu muốn update>}}, {multi: true, upsert: true})


 * Xóa 1 document trong collection nhận 2 đối số: 1 là điều kiện, 2 xóa bao nhiêu phần tử nếu justOne: true thì sẽ chỉ xóa 1 còn nếu là false thì sẽ xóa hết
  db.<tên Collection>.remove({<Query>}, {justOne: true})


  *Đường dẫn đến folder phải ở trong dấu ""
  * Cách export db của MongoDB phải download MongoDB db tools về, và phải chạy mongodump trên 1 cmd khác
   mongodump -d <tên db> -o "<đường dẫn folder>"

   *Cách export collection 
   mongoexport -d <tên db> -c <tên collection> -o <đường dẫn folder>

   *Cách import collection
   mongoimport -d <tên db muốn import> -c <tên collection của db muốn import> --file <đường dẫn đến file muốn import>

   *Cách import db
    mongorestore -d <tên db muốn import> <đường dẫn đến folder db mới>
 */

 




