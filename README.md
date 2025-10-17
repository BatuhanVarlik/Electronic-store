Harika bir fikir\! Projenin tüm dosyalarını inceledim. Bu, öğrendiğimiz tüm konuları mükemmel bir şekilde bir araya getiren harika bir portföy projesi olmuş.

İşte bu proje için yazabileceğin, hem projenin özelliklerini anlatan hem de teknik yeteneklerini sergileyen kapsamlı bir `README.md` dosyası. Aşağıdaki metni kopyalayıp `README.md` dosyana yapıştırabilirsin.

-----

# Elektronik Mağazası Vitrin Projesi

Bu proje, JavaScript'in temel DOM manipülasyonu ve modern web geliştirme tekniklerini kullanarak oluşturulmuş dinamik bir e-ticaret vitrin uygulamasıdır. Kullanıcılar ürünleri görüntüleyebilir, kategorilere göre filtreleyebilir, anlık olarak arama yapabilir ve kalıcı bir alışveriş sepetine ürün ekleyebilirler.

*(**Not:** Yukarıdaki ekran görüntüsü linkini kendi aldığın bir ekran görüntüsüyle güncelleyebilirsin.)*

-----

## ✨ Özellikler

  * **Dinamik Ürün Listeleme:** Ürünler, bir JavaScript dizisinden alınarak sayfa yüklendiğinde dinamik olarak oluşturulur.
  * **Kategoriye Göre Filtreleme:** Kullanıcılar, "Laptop", "Telefon", "Kulaklık" gibi kategorilere tıklayarak ürünleri anında filtreleyebilir. Seçili olan filtre görsel olarak vurgulanır.
  * **Anlık Arama:** Arama çubuğuna yazılan her karakterle birlikte, ürün isimleri içinde eşleşen sonuçlar gerçek zamanlı olarak filtrelenir.
  * **Birleşik Filtreleme:** Kategori ve arama filtreleri birbiriyle uyumlu çalışır. Örneğin, "Laptop" kategorisi seçiliyken yapılan bir arama sadece laptoplar içinde yapılır.
  * **Alışveriş Sepeti:** Kullanıcılar "Sepete Ekle" butonu ile ürünleri sepete ekleyebilir ve anasayfadaki sayaçtan sepetteki ürün miktarını takip edebilirler.
  * **Kalıcı Sepet (`localStorage`):** Sepete eklenen ürünler tarayıcının yerel deposunda saklanır. Bu sayede kullanıcı sayfayı yenilediğinde veya kapatıp açtığında sepeti kaybolmaz.
  * **Ayrı Sepet Sayfası:** Kullanıcılar, sepet ikonuna tıklayarak sepet içeriğini ve toplam tutarı görebilecekleri ayrı bir sayfaya yönlendirilir.
  * **Sepetten Ürün Kaldırma:** Sepet sayfasında, kullanıcılar istemedikleri ürünleri "Kaldır" butonu ile sepetten çıkarabilir ve toplam tutar anında güncellenir.

-----

## 🛠️ Kullanılan Teknolojiler

  * **HTML5:** Sayfaların anlamsal yapısı için.
  * **CSS3:** Modern ve duyarlı tasarım için (Flexbox, Grid).
  * **Vanilla JavaScript (ES6+):** Projenin tüm dinamik işlevselliği için herhangi bir kütüphane veya framework olmadan saf JavaScript kullanılmıştır.

-----

## 📂 Proje Yapısı

```
.
├── index.html      # Ana sayfa, ürünlerin listelendiği ve filtrelendiği yer
├── cart.html       # Alışveriş sepeti sayfası
├── style.css       # Tüm sayfaların ortak stil dosyası
├── app.js          # Ana sayfanın tüm mantığını içeren JavaScript dosyası
└── cart.js         # Sepet sayfasının mantığını içeren JavaScript dosyası
```

-----

## 🚀 Nasıl Çalıştırılır?

Proje herhangi bir derleme adımı gerektirmez.

1.  Bu repoyu bilgisayarınıza klonlayın veya indirin.
2.  `index.html` dosyasını herhangi bir modern web tarayıcısında açın.

-----

## 💡 Öne Çıkan JavaScript Konseptleri

Bu proje, aşağıdaki temel ve modern JavaScript konseptlerini uygulamalı olarak sergilemektedir:

  * **DOM Manipülasyonu:** `getElementById`, `querySelector`, `createElement`, `appendChild`, `innerHTML` ve `classList` gibi metotlarla sayfa içeriğini dinamik olarak oluşturma ve yönetme.
  * **Olay Yönetimi (Event Handling):** `addEventListener` ile `'click'` ve `'input'` gibi kullanıcı etkileşimlerini yakalama.
  * **Event Delegation:** Kategori butonları, ürün kartları ve sepet listesi gibi dinamik olarak oluşturulan çok sayıda eleman için olay dinleyicilerini tek bir üst elemana ekleyerek performansı ve kod okunabilirliğini artırma.
  * **Modern Dizi Metotları:** `forEach` (listeleme), `filter` (filtreleme) ve `find` (belirli bir ürünü bulma) gibi metotların etkin kullanımı.
  * **Web Storage (localStorage):** `setItem` ve `getItem` kullanarak sayfalar ve oturumlar arasında veri kalıcılığı sağlama (alışveriş sepeti).
  * **JSON:** `JSON.stringify` ve `JSON.parse` ile JavaScript nesnelerini `localStorage`'da saklanabilecek metin formatına dönüştürme ve geri alma.
  * **Durum Yönetimi (State Management):** `currentCategory`, `currentSearchTerm` ve `cart` gibi değişkenler kullanarak uygulamanın o anki durumunu (state) yönetme ve bu duruma göre arayüzü güncelleme.