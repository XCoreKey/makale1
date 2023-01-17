import { useState, useEffect } from "react";
import { IntlProvider, FormattedMessage } from "react-intl";

const messages = {
	"tr-TR": {
		title: `SpaceX, ilk Starship yörüngesel fırlatma girişimine yaklaştı`,
		description: `SEATTLE - SpaceX ve CEO'su Elon Musk, Starship aracının ilk yörüngesel fırlatma denemesinin yaklaştığını, ancak şirketin önce hem teknik hem de düzenleyici engelleri aşması gerektiğini söylüyor.

		SpaceX, 12 Ocak'ta, Teksas, Boca Chica'daki Starbase test sahasında Starship aracının ve Super Heavy güçlendiricisinin son bir dizi testine devam ettiğini tweetledi. Şirket, 9 Ocak'ta fırlatma rampasında Booster 7 olarak adlandırılan Super Heavy güçlendiricinin üzerine Ship 24 adlı bir Starship aracı yerleştirdi.
		
		Şirketin söylediğine göre bu testler, birleşik aracın "tam yığın" ıslak elbiseli provasını içeriyor. Bunu, Booster 7'deki 33 Raptor motorunun tümünün statik ateşleme testi takip edecek, bu motorların tümü ilk kez aynı anda ateşlendi.
		
		Bu testler, teknik açıdan yörüngesel bir fırlatma girişiminin önünü açacaktır. SpaceX, bu fırlatmanın "önümüzdeki haftalar" dışında ne zaman gerçekleşebileceğini tahmin etmedi.
		
		Musk, yine de, daha açık sözlü oldu. "Şubat sonunda gerçek bir şansımız var. Mart fırlatma girişimi büyük olasılıkla görünüyor," diye tweet atarak, fırlatmanın Ocak ayı sonunda planlandığını iddia eden bir Güney Teksas yayınına atıfta bulunan bir kişiye yanıt verdi.
		
		Ancak SpaceX, hem Musk hem de diğerleri tarafından Starship'in ilk yörünge fırlatma programına ilişkin geçmiş tahminlerini kaçırdı. Şubat 2022'de arka planda tamamen istiflenmiş bir Starship'in olduğu bir etkinlikte Musk, aracın "birkaç ay" içinde uçmaya hazır olacağını tahmin etti.
		
		Ekim ayının sonlarında yapılan bir danışma komitesi toplantısında, bir NASA yetkilisi, Starship'in, tam aracın ıslak elbiseli provasını ve güçlendiricinin 33 motorlu statik ateşleme testini tamamladıktan sonra Aralık ayı başında fırlatılmaya hazır olmasını beklediğini söyledi. NASA, aracın bir versiyonunu Artemis görevleri için aya iniş aracı olarak kullanmayı planladığı için Starship'in ilerleyişini yakından takip ediyor. SpaceX, bu iniş araçlarını geliştirmek için toplam değeri 4 milyar doları aşan iki NASA ödülü aldı.
		
		SpaceX'in hem Musk'ın Şubat'taki tahminini hem de daha yakın tarihli NASA tahminini neden kaçırdığı açık değil. Şirket, Temmuz ayında bir Super Heavy güçlendiricinin altındaki itici gazların bir test sırasında tutuşarak güçlendiriciye zarar vermesiyle kayda değer bir test başarısızlığı yaşadı.
		
		Önemli teknik dönüm noktalarına ek olarak, SpaceX'in yörüngesel bir Starship fırlatması için Federal Havacılık İdaresi'nden bir fırlatma lisansına da ihtiyacı var. FAA, Haziran ayında, Starship yörünge fırlatmalarının Boca Chica'dan devam etmesine izin veren ancak şirketin çevresel etkileri azaltmak için 75'ten fazla önlem uygulamasını gerektiren bir çevresel incelemeyi tamamladı.
		
		Ne SpaceX ne de FAA, bu azaltmaların uygulanmasındaki ilerleme veya bir Starship fırlatma lisansının durumu hakkında güncelleme sağlamadı. Ancak FAA, 12 Ocak'ta SpaceNews'e yaptığı açıklamada, fırlatma lisansı verilmeden önce tüm önlemlerin alınması gerekmediğini söyledi.
		
		Ajans, "SpaceX'in Starship/Süper Ağır programı için 75'ten fazla FAA'nın gerektirdiği çevresel azaltımları uygulamasına yönelik zaman çerçevesi değişiyor" dedi. “Örneğin, bazı önlemlerin lansmandan önce tamamlanması gerekirken, diğerleri lansman sonrası faaliyetler sırasında veya bir aksilik olayının ardından gerçekleştirilecek şekilde tasarlanıyor. FAA, SpaceX'in gerekli tüm hafifletme önlemlerine uymasını sağlayacaktır."`,
	},
	"en-US": {
		title: `SpaceX edges closer to first Starship orbital launch attempt`,
		description: `SEATTLE — SpaceX and its chief executive, Elon Musk, say the first orbital launch attempt of its Starship vehicle is approaching, but the company must first overcome both technical and regulatory obstacles.

		SpaceX tweeted Jan. 12 that it was moving ahead with a final series of tests of its Starship vehicle and Super Heavy booster at its Starbase test site in Boca Chica, Texas. The company installed a Starship vehicle called Ship 24 on top of a Super Heavy booster designated Booster 7 on the launch pad there Jan. 9.
		
		Those tests, the company said, include a “full stack” wet dress rehearsal of the combined vehicle. That would be followed by a static-fire test of all 33 Raptor engines on Booster 7, the first time all those engines have fired simultaneously.
		
		Those tests would clear the way for an orbital launch attempt from a technical standpoint. SpaceX did not estimate when that launch could take place other than the “weeks ahead.”
		
		Musk, though, has been more forthcoming. “We have a real shot at late February. March launch attempt appears highly likely,” he tweeted Jan. 7, responding to a person who cited a South Texas publication that claimed the launch was planned for the end of January.
		
		However, SpaceX has missed several past estimates, by both Musk and others, regarding the schedule for the first Starship orbital launch. At an event in February 2022, with a fully stacked Starship as a backdrop, Musk estimated the vehicle would be ready to fly in “a couple months.”
		
		At an advisory committee meeting in late October, a NASA official said he expected Starship to be ready for launch as soon as early December, after completing a wet dress rehearsal of the full vehicle and a 33-engine static-fire test of the booster. NASA is closely following the progress of Starship as it plans to use a version of the vehicle as a lunar lander for Artemis missions. SpaceX has received two NASA awards with a combined value of more than $4 billion to develop those landers.
		
		It’s not clear why SpaceX missed both Musk’s forecast in February or the more recent NASA estimate. The company did suffer one notable testing setback in July when propellants underneath a Super Heavy booster ignited during a test, damaging the booster.
		
		In addition to major technical milestones, SpaceX also needs a launch license from the Federal Aviation Administration for an orbital Starship launch. The FAA completed an environmental review in June, allowing Starship orbital launches to proceed from Boca Chica but requiring the company to implement more than 75 measures to mitigate environmental effects.
		
		Neither SpaceX nor the FAA have provided updates on the progress of implementing those mitigations or the status of a Starship launch license. However, the FAA, in statement to SpaceNews Jan. 12, said not all of the measures need to be completed before issuing a launch license.
		
		“The timeframe for SpaceX to implement the more than 75 FAA required environmental mitigations for its Starship/Super Heavy program varies,” the agency said. “For example, some measures must be completed prior to launch while others are designed to occur during post-launch activities or following a mishap event. The FAA will ensure SpaceX complies with all required mitigations.”`,
	},
};

function Makale() {
	const isLocale = localStorage.getItem("locale");
	const defaultLocale = isLocale ? isLocale : navigator.language;
	const [locale, setLocale] = useState(defaultLocale);

	useEffect(() => {
		localStorage.setItem("locale", locale);
	}, [locale]);

	return (
		<div>
			<IntlProvider locale={locale} messages={messages[locale]}>
				<FormattedMessage id="title" />

				<p>
					<FormattedMessage id="description" values={{ count: 5 }} />
				</p>
                <div className="sag">
				<button  className="gradient-button gradient-button-1" onClick={() => setLocale("tr-TR")}>TR</button>
				<button  className="gradient-button gradient-button-1" onClick={() => setLocale("en-US")}>EN</button>
                </div>
			</IntlProvider>
			<l1>
				Makalenizin yayınlanmasını istiyorsanız info@bilinmezlik.com a mail atınız
			</l1>
		</div>
	);
}

export default Makale