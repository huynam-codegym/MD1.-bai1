function nhapnam() {
    let year = +prompt("nhập năm vào");
       if (year%400==0){
           document.write(year + "Đúng là năm nhuận");
       }
          else
          {
             if (year%4==0 && year%100 !=0)

                   document.write(year + "Đúng là năm nhuận");
               else
                   document.write(year + "Không phải là năm nhuận");

          }
}