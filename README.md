<h1>E-Commerce Uygulaması</h1>

Bu proje, bir e-ticaret uygulamasının temel özelliklerini içeren React-Redux-Toolkit bir web uygulamasını sağlar. Aşağıda projenin özelliklerini ve kullanım talimatlarını bulabilirsiniz.

<h2>Özellikler</h2>
<ul>

    <li>Redux Toolkit kullanılarak durum yönetimi sağlanmıştır.</li>
    <li>Kullanıcılar, giriş ve çıkış işlemlerini gerçekleştirebilir.</li>
    <li>Sanal bir veritabanından ürünler alınarak liste halinde görüntülenir.</li>
    <li>Bazı ürünler, bir kaydırıcı (slider) bileşeni kullanılarak ekrana bastırılır.</li>
    <li>Kullanıcılar, ekrandaki ürünleri sepete ekleyebilir.</li>
    <li>Sepet sayfasında, ürün adetlerini artırıp azaltabilirler</li>
    <li>Ürün adetine göre fiyatlar otomatik olarak güncellenir.</li>
    <li>Toplam fiyat, seçilen ürün sayısına göre dinamik olarak değişir.</li>
    <li>Kullanıcılar, sayfa ilk yüklendiğinde kullanıcı adı ve şifre ile giriş yapabilir</li>
    <li>Giriş yapıldığında, ürünler otomatik olarak ekrana gelir.</li>
    <li>"Hesabım" bölümünden çıkış yapılabilir ve kullanıcı giriş ekranına yönlendirilir.</li>

</ul>

<h2>Kurulum</h2>
Bu projeyi klonlayın veya ZIP olarak indirin.</br>
Proje dizinine gidin ve terminali açın.</br>
Gerekli bağımlılıkları yüklemek için npm install komutunu çalıştırın.</br>
Projeyi başlatmak için npm start komutunu çalıştırın.</br>
Web tarayıcınızda http://localhost:3000 adresini açın.</br>

<h2>Kullanım</h2>
<ul>
    <li>Ana sayfada ürünleri görüntüleyin.</li>
    <li>Ürünleri sepete eklemek için "+" veya "-" düğmelerini kullanın.</li>
    <li>Sepet sayfasında ürün adetlerini artırıp azaltın.</li>
    <li>Toplam fiyatı gözlemleyin.</li>
    <li>"Hesabım" bölümünden giriş yapın veya çıkış yapın.</li>
</ul>

<h2>Redux Toolkit Kullanımı</h2>
Bu projede Redux Toolkit, durum yönetimi için kullanılmıştır. Aşağıda Redux Toolkit ile yapılan işlemleri açıklayan adımları bulabilirsiniz:</br>

createSlice fonksiyonuyla bir dilim (slice) oluşturulur. Bu dilim, cartSlice.js dosyasında yer almaktadır ve cart adıyla kaydedilir. İlgili dilim, sepetle ilgili durumları ve işlevleri içerir.</br>
Dilimin başlangıç durumu, initialState olarak tanımlanır. Bu durum, boş bir itemsList (ürün listesi) ve totalQuantity (toplam ürün adedi) içerir.</br>
addToCart adında bir reducer fonksiyonu tanımlanır. Bu fonksiyon, sepete ürün eklemek için kullanılır. Yeni bir ürün eklenirken mevcut ürünlerle karşılaştırılır ve gerekli güncellemeler yapılır.</br>
configureStore fonksiyonuyla bir Redux mağazası oluşturulur. Bu mağaza, cart dilimini içeren bir reducer'a sahiptir.</br>
useDispatch kancası ile bir dispatch fonksiyonu elde edilir. Bu fonksiyon, reducer'lara eylemleri göndermek için kullanılır.</br>
addToCart fonksiyonu, bir ürünü sepete eklemek için dispatch fonksiyonuyla tetiklenir. Bu fonksiyon, cartSlice dilimindeki addToCart reducer'ını çalıştırır ve sepet durumunu günceller.</br>

<h2>Teknolojiler</h2>
React.js</br>
Redux Toolkit</br>
React Router</br>
CSS (Stilizasyon için)</br>
Sanal Veritabanı</br>

<h2><a href="https://ecommerce-site-using-redux-toolkit.netlify.app">Canlı Önizleme</a></h2>
<img src="./src/assets/images/screen.gif" alt="">
