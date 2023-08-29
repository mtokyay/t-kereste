import React from "react";
import Container from "@material-ui/core/Container";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";

const useStyles = makeStyles((theme) => ({
  accordion: {
    // Remove shadow
    boxShadow: "none",
    "&:before": {
      // Remove default divider
      display: "none",
    },
    // Add a custom border
    "&:not(:last-child)": {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  },
  expanded: {
    margin: `0 !important`,
  },
  summary: {
    minHeight: 78,
  },
  summaryContent: {
    margin: "0 !important",
  },
}));

function FaqSection(props) {
  const classes = useStyles();

  const items = [
    {
      question:
        "Ahşap Yapıların Isı Yalıtımı Nasıldır? Yaz Kış Kullanıma Uygun mudur?",
      answer:
        "Ahşabın hücre yapısı eşsiz bir ısı yalıtımı sunar, Ahşap malzeme bu nedenle aynı ebattaki betona göre 15 kat çelikten 400 kat ,alüminyumdan 1770 kat daha fazla ısı izolasyonu sağlar. 10 cm kalınlığındaki ahşap kütük duvar 55 cm kalınlığındaki beton duvara eşittir.",
    },
    {
      question: "Ahşap Yapıların Ömrü Ne Kadardır?",
      answer:
        "Ahşap yapıların ömrü diğer tüm yapı malzemelerinden çok daha uzundur. Gerekli bakım yapılmasa dahi ahşap yapılar 200 yıl rahatlıkla ayakta kalırlar. Dünyanın en eski ve en dayanıklı yapı malzemesi olan ahşaptan yapılan yapılar 800 yıl öncesinden günümüze kadar ulaşmıştır. Norveç, Almanya, Finlandiya, Türkiye de 800 yılı aşmış yapılar mevcuttur.",
    },
    {
      question: "Ahşap Neden Ekolojik?",
      answer:
        "Ahşap malzeme yerine kullanılan suni ve kimyasal materyaller kullanıldıkça doğanın aşırı ısınması ve küresel ısınma kaçınılmazdır. buda ahşap malzemeyi seçmenin hem ekonomik hemde sağlıklı bir yol olduğunun kanıtıdır, dünyada kereste ihracatı yapan ülkelerde örneğin Finlandiya Almanya da ormanlık alanların azaldığı değil çoğaldığı görülmektedir, Çünkü kesilen her ağacın yerine 2 adet ağaç dikilmektedir.1tonluk yapı malzemesi üretmek için gereken enerji . Alüminyum… 20169 Kw/saat  Çelik… 3780 KW/saat Ahşap… 435 KW/saat",
    },
    {
      question:
        "Ne Tür Ahşap Kullanılır? Kurtlanma, Mantarlaşma, Böceklenme Tehlikesi Olur mu ?",
      answer:
        "Kütük evlerde Finlandiya Almanya dan dan ithal fırınlanmış lamine edilmiş ve CE normlarında üretimli gerçekleşmiş ladin ve çam kereste mamulü kullanmaktadır. Ahşap panel evlerde ise Rusya dan ve Almanya dan ithal edilen Ladin, Çam kereste mamulü kullanmaktadır, Ahşabı çürüten içindeki özüdür bu özü dışarı çıkarmanın tek yolu ise fırınlamaktır, fırınlamış ağaç kurtlanma ve mantarlaşma yapmaz, Ahşaba zarar veren haşereler, ormanlık alanda dikili bazı ağaçların içinde olurlar, tomruklar kesilirken içine yerleşen bu haşereler içerde gizlenirler, ancak her kerestede haşere olmayabilir, haşere riskini kaldırmanın tek yolu fırınlamaktır, eğer kerestenin içine yerleşen bir haşere varsa fırınlama yoluyla ölecektir.ancak fırınlanmamış ve içinde haşere olan bir kereste ev yapımında kullanılırsa bu haşere zamanla içerde ürer ve yavaş yavaş diğer kerestelere de sıçrar sonunda 15-20 yıl gibi bir sürede ahşabı kullanılmayacak hale getirir, Yapılarımızın konstrüksiyonunda kullanılan her kereste CE normlarında yurtdışında fırınlanarak ve ilaçlanarak ülkemize giriş yapabilmektedir, dolayısıyla bu tür riskler yapılarımızda yoktur.",
    },
    {
      question: "Yangına Karşı Direnci Nasıl? Ne Gibi Önlemler Alınıyor?",
      answer:
        "Genel kanının aksine ahşabın yangına direnci beton ve çelikten üstündür. Bugün ABD nde kapalı spor salonu gibi büyük kalabalıkların bulunacağı yerlerin, yangın tehlikesine karşı ahşap karkas olarak inşasına gidilmektedir, Almanya da gene aynı nedenle çelik konstrüksiyonlar ahşap kaplanmaktadır. Yangınlar üzerine yapılmış araştırmalar ve derlenmiş istatistikler taşıyıcı olarak kullanılan ahşabın en güvenli malzemelerden biri olduğunu açıkça ortaya koymaktadır. Yangının başlama nedeni hiçbir zaman ahşap değildir ve ısı geçirmeme, kömürleşme özellikleri nedeniyle ahşap-karkas yapının büyük yangınlara ne kadar dayanabileceği kesin olarak hesaplanabilmektedir. Ahşap yapılar yangına 30-90 dakika dayanabilecek şekilde tasarlanabiliyor. Ancak çıplak çelik yapı (çeliğin genleşme katsayısının yüksekliği nedeniyle) normal bir yangına ancak 10 dakika dayanabilmekte, yapı ikaz vermeden anında çökmektedir. İster beton ister çelik olsun tüm yapılarda başlıca yangın sebebi elektrik sistemindeki kısa devredir,Trafo sistemi dediğimiz sistemde anahtarından gelen her Anti krom-Halogenfree kablo ayrı ayrı buat kullanılmadan direkt olarak sigorta panosuna oradan da kaçık akım rölesine bağlanır, böylelikle kısa devre olasılığı ortadan kalkar. Elektrik tesisatının geçeceği tüm holler fabrikada projeye uygun olarak özel makinelerle açılır evin iç kısmında kablo gözükmez. Bilhassa yüksek katlı yapıların yangınlarda büyük risk taşıdığı vurgulanırken, enerji verimliliğinde avantajlar sağlayan yalıtım malzemelerinin çabuk tutuşması bakımından tehlike arz ettiğine dikkat çekildi. Yangın güvenliğinin ve yönetmeliğin hayati önem arz eden duman tahliyeleri ve izdiham sonucu yaşanan ölümler konusunda ise eksikler olduğunu dile getirdi. Bursa Büyükşehir Belediyesi Yangın Önlem Şube Müdürü Abuzer Demirci,",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container maxWidth="md">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />

        {items.map((item, index) => (
          <Accordion
            classes={{
              root: classes.accordion,
              expanded: classes.expanded,
            }}
            key={index}
          >
            <AccordionSummary
              classes={{
                root: classes.summary,
                content: classes.summaryContent,
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`faq-panel-${index}`}
            >
              <Typography variant="h6">{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails id={`faq-panel-${index}`}>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Section>
  );
}

export default FaqSection;
