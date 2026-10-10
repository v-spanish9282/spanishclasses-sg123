'use strict';
(function(){
/* ================= EDIT THESE ================= */
var CONFIG = {
  whatsapp: '6500000000',                         /* country code + number, no + or spaces. REPLACE */
  calendarUrl: 'https://YOUR-BOOKING-LINK',       /* booking link for a free call / trial. REPLACE */
  email: 'support@spanishclasses.sg',
  classroomAddress: ''                            /* e.g. '10 Orchard Road, #05-01, Singapore 123456'. Leave '' to hide */
};
/* ============================================== */

var root = document.getElementById('scs');
if (!root) return;

var LANGS = [['en','English'],['zh','中文'],['ms','Bahasa Melayu'],['id','Bahasa Indonesia'],['ja','日本語'],['es','Español']];

var T = {
en:{nav_classes:"Classes",nav_prices:"Prices",nav_ib:"IB Spanish",nav_teachers:"Teachers",nav_faq:"FAQ",cta_short:"Talk to an advisor",cta_long:"Talk to a language advisor",
hero_eyebrow:"Face-to-face Spanish classes · Singapore",hero_h1:"The best place to learn <em>Spanish</em> in Singapore.",hero_sub:"Real classes with native Spanish teachers who have taught IB students from Singapore's international schools. Learn at home with a private teacher, or join a small group in one of our classrooms.",hero_cta2:"See prices",hero_micro:"Private classes start with a free 30-minute trial.",ph_hero:"Photo: a teacher and student at the table",chip_where:"Native teacher · At your home",
trust_1:"Native Spanish teachers",trust_2:"Experienced with IB students",trust_3:"At your home or our classroom",trust_4:"Free 30-minute trial",
hum_eyebrow:"Real teachers, real rooms",hum_h2:"Spanish is learned <em>face to face</em>.",hum_p1:"A language lives in conversation. Across a table, a good teacher notices the moment a student hesitates, hears the sound they cannot quite make, and knows exactly what to say next.",hum_p2:"That is what our teachers do. A native speaker sits with your child, listens, corrects and encourages, and builds the kind of confidence that only comes from talking to a real person.",
hum_1_t:"They hear every word",hum_1_d:"Sitting together, a teacher catches pronunciation, hesitation and habits as they happen.",hum_2_t:"They know the IB",hum_2_d:"Our teachers have taught IB students from international schools including SAS, Nexus and UWC.",hum_3_t:"They bring the culture",hum_3_d:"Real expressions, real humour and the stories behind the words, from people who grew up speaking Spanish.",
where_eyebrow:"Where you learn",where_h2:"Your home or <em>our classroom</em>.",w1_tag:"At your home",w1_h:"We come to you.",w1_p:"For private classes, a teacher travels to your home. Your child learns at their own table, at a time that suits your family, with no commute.",w2_tag:"At our classroom",w2_h:"Or come to us.",w2_p:"Private, group and conversational classes run in our classrooms, set up for focused learning in small groups.",w2_addr_none:"Ask an advisor for your nearest classroom.",ph_home:"Photo: a lesson at home",ph_class:"Photo: our classroom",
price_eyebrow:"Classes and prices",price_h2:"Clear prices, <em>upfront</em>.",price_sub:"All prices are in Singapore dollars.",
p1_tag:"One-on-one",p1_h:"Private classes",p1_p:"One student and one native teacher, at your home or in our classroom. Lessons are built around your goals, from IB exams to confident conversation.",p1_o1:"10 hours",p1_o2:"20 hours",per_hour:"{p} per hour",p1_trial:"Free 30-minute trial",p1_cta:"Book a free trial class",
p2_tag:"Small groups",p2_h:"Group classes",p2_p:"A structured course that takes you from first words to intermediate, one sub-level at a time.",per_person_sub:"per person, per sub-level",per_person:"per person",p_meta:"24 hours · 12 classes of 2 hours",p2_cta:"Ask about group classes",
p3_tag:"Speaking practice",p3_h:"Conversational classes",p3_p:"Twelve classes with one focus: speaking. Real conversation, guided by a native teacher, to build fluency and confidence.",p3_meta:"Speaking-first, small groups",p3_cta:"Ask about conversation classes",
lv_title:"Group classes: nine steps from first words to real conversation.",lv_a1:"A1 · Beginner",lv_a2:"A2 · Elementary",lv_b1:"B1 · Intermediate",lv_note:"Each sub-level is 24 hours over 12 classes, S$450 per person. Not sure of your level? We will place you after a short chat.",
ib_eyebrow:"For IB families",ib_h2:"Teachers who have already helped students <em>like yours</em>.",ib_p1:"Our teachers have taught IB Spanish to students from Singapore's international schools, including SAS, Nexus and UWC. They know the syllabus, the assessments and the pressure that comes with them.",ib_p2:"Whether your child is in MYP Language Acquisition, DP Spanish ab initio or Spanish B, lessons follow what they study at school and what the exam asks of them. Speaking comes first, so the individual oral feels familiar by exam day.",
ib_f1_t:"Individual oral practice",ib_f1_d:"Regular speaking practice with a native teacher, in the format the IB uses.",ib_f2_t:"Writing with clear feedback",ib_f2_d:"Exam-style writing tasks, marked with notes on exactly what to fix.",ib_f3_t:"Listening and reading",ib_f3_d:"Real Spanish audio and texts, practised the way the exam tests them.",ib_f4_t:"Not just for exams",ib_f4_d:"Teens and adults learn with us too, for school, travel, work or the love of it.",
teach_eyebrow:"Our teachers",teach_h2:"Native speakers. <em>Experienced</em> with IB students.",teach_p:"Every one of our teachers is a native Spanish speaker with real classroom experience, including teaching IB students from Singapore's international schools. They are also MOE-certified.",schools_more:"+ MORE",
teach_1_t:"Native Spanish",teach_1_d:"Natural accent, real expressions, and the culture behind the words.",teach_2_t:"IB experience",teach_2_d:"They have taught students from SAS, Nexus, UWC and other international schools.",teach_3_t:"Matched with care",teach_3_d:"We pair each student with the teacher who suits their level, goals and personality.",
badge:"NATIVE TEACHERS · IB EXPERIENCE · NATIVE TEACHERS · IB EXPERIENCE ·",
how_eyebrow:"How it works",how_h2:"From first chat to first class in <em>three steps</em>.",how_1_t:"Talk to an advisor",how_1_d:"Tell us about the learner, their level, their goals and the times that suit you.",how_2_t:"Try a class",how_2_d:"Private classes start with a free 30-minute trial. For groups, we place you in the right level.",how_3_t:"Start learning",how_3_d:"At your home or in our classroom, with a native teacher.",how_cta:"Start with a free chat",
why_eyebrow:"Why Spanish",why_h2:"One language. A <em>world</em> of people to talk to.",stat_1:"people speak Spanish worldwide",stat_2:"native speakers",stat_3:"countries where Spanish is an official language",stat_src:"Source: Instituto Cervantes, 2025",
faq_eyebrow:"Questions",faq_h2:"Good questions, <em>straight</em> answers.",faq_side_t:"Still have a question?",faq_side_p:"Our language advisors are happy to help.",
faq:[["Are the classes online or in person?","In person. A teacher comes to your home for private classes, or you join us in one of our classrooms."],
["How much do classes cost?","Private classes are S$800 for 10 hours or S$1,500 for 20 hours. Group and conversational classes are S$450 per person for 24 hours (12 classes of 2 hours)."],
["Is there a free trial?","Yes. Private classes start with a free 30-minute trial, so you can meet the teacher before you decide."],
["Who teaches the classes?","Native Spanish speakers who have taught IB students from international schools in Singapore, including SAS, Nexus and UWC."],
["Can you help with IB Spanish?","Yes. We support MYP Language Acquisition, DP Spanish ab initio and Spanish B, with extra focus on speaking for the individual oral."],
["What levels do group classes cover?","Nine sub-levels from A1.1 to B1.3, from complete beginner to intermediate. Each sub-level is 24 hours."],
["How flexible are the times?","Private class times are arranged around your schedule. Ask an advisor for upcoming group start dates."],
["Is it only for children?","No. We teach teens and adults too, whether for exams, work, travel or the love of the language."]],
final_eyebrow:"Ready when you are",final_h2:"Find the right Spanish class in <em>one conversation</em>.",final_p:"Tell us about the learner. We will tell you exactly how we can help.",
modal_title:"Talk to a language advisor",modal_p:"Choose how you would like to reach us. We will help you find the right class.",modal_title_trial:"Book your free trial class",modal_p_trial:"Tell us a little about the learner and we will arrange a free 30-minute private class.",modal_wa:"Chat on WhatsApp",modal_wa_d:"Fastest. Message us any time.",modal_call:"Book a free call",modal_call_d:"Pick a time that suits you.",modal_email:"Email us",
wa_msg:"Hi! I would like to talk about Spanish classes.",wa_msg_trial:"Hi! I would like to book a free 30-minute trial class.",footer_tag:"Face-to-face Spanish classes with native teachers, at your home or in our classrooms in Singapore.",footer_explore:"Explore",footer_contact:"Contact",footer_rights:"All rights reserved."},

zh:{nav_classes:"课程",nav_prices:"价格",nav_ib:"IB西班牙语",nav_teachers:"师资",nav_faq:"常见问题",cta_short:"咨询顾问",cta_long:"与语言顾问聊聊",
hero_eyebrow:"面对面西班牙语课程 · 新加坡",hero_h1:"在新加坡学习<em>西班牙语</em>的最佳选择。",hero_sub:"由西班牙语母语老师面对面授课，他们曾教过新加坡多所国际学校的IB学生。可以请私人老师到家上课，也可以在我们的教室参加小班课。",hero_cta2:"查看价格",hero_micro:"私人课程先提供30分钟免费试听。",ph_hero:"照片：老师和学生一起在桌前上课",chip_where:"母语老师 · 上门授课",
trust_1:"西班牙语母语教师",trust_2:"熟悉IB教学",trust_3:"上门或在我们的教室",trust_4:"30分钟免费试听",
hum_eyebrow:"真正的老师，真实的课堂",hum_h2:"西班牙语要<em>面对面</em>学。",hum_p1:"语言存在于对话之中。隔着一张桌子，好老师能察觉学生犹豫的那一刻，听出他们还发不准的音，并且知道接下来该说什么。",hum_p2:"这正是我们的老师在做的事。一位母语老师坐在孩子身边，倾听、纠正、鼓励，建立起只有和真人交谈才能获得的自信。",
hum_1_t:"每个字都听得见",hum_1_d:"面对面上课，老师能即时发现发音、犹豫和习惯上的问题。",hum_2_t:"他们了解IB",hum_2_d:"我们的老师曾教过来自SAS、Nexus和UWC等国际学校的IB学生。",hum_3_t:"他们带来文化",hum_3_d:"地道的表达、真实的幽默，以及词语背后的故事，来自从小说西班牙语的人。",
where_eyebrow:"上课地点",where_h2:"在您家，或在<em>我们的教室</em>。",w1_tag:"在您家",w1_h:"我们上门。",w1_p:"私人课程可由老师到您家授课。孩子在熟悉的桌前、在方便您家的时间学习，无需奔波。",w2_tag:"在我们的教室",w2_h:"或者来找我们。",w2_p:"私人课、小班课和会话课都在我们的教室进行，环境专为专注学习和小班教学而设。",w2_addr_none:"请咨询顾问，了解离您最近的教室。",ph_home:"照片：在家上课",ph_class:"照片：我们的教室",
price_eyebrow:"课程与价格",price_h2:"价格清晰，<em>一目了然</em>。",price_sub:"所有价格均以新加坡元计。",
p1_tag:"一对一",p1_h:"私人课程",p1_p:"一位学生，一位母语老师，在您家或我们的教室上课。课程围绕您的目标设计，从IB考试到自信对话。",p1_o1:"10小时",p1_o2:"20小时",per_hour:"每小时{p}",p1_trial:"30分钟免费试听",p1_cta:"预约免费试听课",
p2_tag:"小班",p2_h:"小班课",p2_p:"结构化课程，一个子级别接一个子级别，带您从入门走到中级。",per_person_sub:"每人，每个子级别",per_person:"每人",p_meta:"24小时 · 12节课，每节2小时",p2_cta:"咨询小班课",
p3_tag:"口语练习",p3_h:"会话课",p3_p:"12节课，只专注一件事：开口说。由母语老师引导真实对话，培养流利度和自信。",p3_meta:"口语优先，小班教学",p3_cta:"咨询会话课",
lv_title:"小班课：九个阶段，从第一句话到真正的对话。",lv_a1:"A1 · 入门",lv_a2:"A2 · 初级",lv_b1:"B1 · 中级",lv_note:"每个子级别共24小时、12节课，每人450新元。不确定自己的水平？简短聊聊后我们会为您分级。",
ib_eyebrow:"为IB家庭而设",ib_h2:"我们的老师已经帮助过<em>和您孩子一样</em>的学生。",ib_p1:"我们的老师曾为新加坡国际学校的学生教授IB西班牙语，包括SAS、Nexus和UWC。他们熟悉课程大纲、评估方式，也了解随之而来的压力。",ib_p2:"无论孩子在读MYP语言习得、DP西班牙语初级（ab initio）还是西班牙语B，课程都紧扣学校所学内容和考试要求。我们把口语放在首位，让孩子在考试那天对个人口试感到熟悉。",
ib_f1_t:"个人口试练习",ib_f1_d:"与母语老师定期练习口语，形式与IB考试一致。",ib_f2_t:"写作，附清晰反馈",ib_f2_d:"按考试形式练习写作，并清楚标注需要改进的地方。",ib_f3_t:"听力与阅读",ib_f3_d:"使用真实的西班牙语音频和文章，按考试的方式练习。",ib_f4_t:"不只为了考试",ib_f4_d:"青少年和成人也在这里学习，为了学业、旅行、工作或纯粹的热爱。",
teach_eyebrow:"我们的老师",teach_h2:"西班牙语母语。<em>熟悉</em>IB教学。",teach_p:"我们的每一位老师都以西班牙语为母语，拥有真实的课堂教学经验，包括教授新加坡国际学校的IB学生。他们也持有MOE认证。",schools_more:"+ 更多",
teach_1_t:"地道西班牙语",teach_1_d:"自然的口音、真实的表达，以及语言背后的文化。",teach_2_t:"IB教学经验",teach_2_d:"曾教过来自SAS、Nexus、UWC及其他国际学校的学生。",teach_3_t:"用心匹配",teach_3_d:"根据每位学生的水平、目标和性格，为其匹配最合适的老师。",
badge:"母语教师 · IB经验 · 母语教师 · IB经验 · 母语教师 · IB经验 ·",
how_eyebrow:"上课流程",how_h2:"从第一次咨询到第一堂课，只需<em>三步</em>。",how_1_t:"与顾问聊聊",how_1_d:"告诉我们学生的水平、目标以及方便的时间。",how_2_t:"试上一堂课",how_2_d:"私人课程先提供30分钟免费试听。小班课我们会为您安排合适的级别。",how_3_t:"开始学习",how_3_d:"在您家或我们的教室，由母语老师授课。",how_cta:"从免费咨询开始",
why_eyebrow:"为什么学西班牙语",why_h2:"一门语言，连接<em>全世界</em>的人。",stat_1:"全球西班牙语使用者",stat_2:"西班牙语母语者",stat_3:"以西班牙语为官方语言的国家",stat_src:"数据来源：塞万提斯学院，2025年",
faq_eyebrow:"常见问题",faq_h2:"好问题，<em>直接</em>回答。",faq_side_t:"还有其他问题？",faq_side_p:"我们的语言顾问很乐意为您解答。",
faq:[["课程是线上还是线下？","线下面对面。私人课程可由老师上门授课，也可以来我们的教室上课。"],
["课程费用是多少？","私人课程10小时S$800，20小时S$1,500。小班课和会话课每人S$450，共24小时（12节课，每节2小时）。"],
["有免费试听吗？","有。私人课程先提供30分钟免费试听，让您在决定前先认识老师。"],
["由谁授课？","西班牙语母语老师，曾教过新加坡国际学校的IB学生，包括SAS、Nexus和UWC。"],
["能帮助IB西班牙语吗？","可以。我们支持MYP语言习得、DP西班牙语初级（ab initio）和西班牙语B，并特别注重个人口试的口语练习。"],
["小班课涵盖哪些级别？","从A1.1到B1.3共九个子级别，从零基础到中级。每个子级别24小时。"],
["上课时间灵活吗？","私人课程时间根据您的安排而定。小班课的开课日期请咨询顾问。"],
["只适合孩子吗？","不是。我们也教青少年和成人，无论是为了考试、工作、旅行，还是纯粹喜欢这门语言。"]],
final_eyebrow:"随时为您准备好",final_h2:"一次对话，找到<em>合适的</em>西班牙语课程。",final_p:"告诉我们学生的情况，我们会告诉您具体可以怎样帮助。",
modal_title:"与语言顾问聊聊",modal_p:"选择您方便的联系方式，我们会帮您找到合适的课程。",modal_title_trial:"预约免费试听课",modal_p_trial:"告诉我们学生的一些情况，我们会安排一节30分钟的免费私人课。",modal_wa:"WhatsApp 聊天",modal_wa_d:"最快捷，随时给我们留言。",modal_call:"预约免费通话",modal_call_d:"选择您方便的时间。",modal_email:"发送邮件",
wa_msg:"您好！我想咨询西班牙语课程。",wa_msg_trial:"您好！我想预约30分钟的免费试听课。",footer_tag:"面对面西班牙语课程，由母语老师授课，可上门或在我们位于新加坡的教室上课。",footer_explore:"浏览",footer_contact:"联系我们",footer_rights:"版权所有。"},

ms:{nav_classes:"Kelas",nav_prices:"Harga",nav_ib:"Sepanyol IB",nav_teachers:"Guru",nav_faq:"Soalan Lazim",cta_short:"Hubungi penasihat",cta_long:"Bercakap dengan penasihat bahasa",
hero_eyebrow:"Kelas bahasa Sepanyol bersemuka · Singapura",hero_h1:"Tempat terbaik untuk belajar <em>bahasa Sepanyol</em> di Singapura.",hero_sub:"Kelas sebenar bersama guru penutur asli yang pernah mengajar pelajar IB dari sekolah antarabangsa di Singapura. Belajar di rumah dengan guru peribadi, atau sertai kumpulan kecil di salah satu bilik darjah kami.",hero_cta2:"Lihat harga",hero_micro:"Kelas peribadi bermula dengan percubaan percuma 30 minit.",ph_hero:"Foto: guru dan pelajar di meja",chip_where:"Guru penutur asli · Di rumah anda",
trust_1:"Guru penutur asli",trust_2:"Berpengalaman dengan pelajar IB",trust_3:"Di rumah anda atau bilik darjah kami",trust_4:"Percubaan percuma 30 minit",
hum_eyebrow:"Guru sebenar, bilik sebenar",hum_h2:"Bahasa Sepanyol dipelajari <em>secara bersemuka</em>.",hum_p1:"Bahasa hidup dalam perbualan. Di seberang meja, guru yang baik perasan saat pelajar teragak-agak, mendengar bunyi yang belum dapat disebut dengan betul, dan tahu apa yang perlu dikatakan seterusnya.",hum_p2:"Itulah yang dilakukan guru kami. Seorang penutur asli duduk bersama anak anda, mendengar, membetulkan dan memberi galakan, membina keyakinan yang hanya datang daripada bercakap dengan orang sebenar.",
hum_1_t:"Mereka mendengar setiap perkataan",hum_1_d:"Duduk bersama, guru dapat menangkap sebutan, keraguan dan tabiat ketika ia berlaku.",hum_2_t:"Mereka faham IB",hum_2_d:"Guru kami pernah mengajar pelajar IB dari sekolah antarabangsa termasuk SAS, Nexus dan UWC.",hum_3_t:"Mereka membawa budaya",hum_3_d:"Ungkapan sebenar, jenaka sebenar dan cerita di sebalik kata-kata, daripada mereka yang membesar dengan bahasa Sepanyol.",
where_eyebrow:"Tempat belajar",where_h2:"Rumah anda atau <em>bilik darjah kami</em>.",w1_tag:"Di rumah anda",w1_h:"Kami datang kepada anda.",w1_p:"Untuk kelas peribadi, guru datang ke rumah anda. Anak anda belajar di meja sendiri, pada waktu yang sesuai untuk keluarga anda, tanpa perlu berulang-alik.",w2_tag:"Di bilik darjah kami",w2_h:"Atau datang kepada kami.",w2_p:"Kelas peribadi, kumpulan dan perbualan diadakan di bilik darjah kami, disediakan untuk pembelajaran yang fokus dalam kumpulan kecil.",w2_addr_none:"Tanya penasihat tentang bilik darjah terdekat anda.",ph_home:"Foto: kelas di rumah",ph_class:"Foto: bilik darjah kami",
price_eyebrow:"Kelas dan harga",price_h2:"Harga yang jelas, <em>dari awal</em>.",price_sub:"Semua harga dalam dolar Singapura.",
p1_tag:"Satu-satu",p1_h:"Kelas peribadi",p1_p:"Seorang pelajar dan seorang guru penutur asli, di rumah anda atau di bilik darjah kami. Pelajaran dibina mengikut matlamat anda, daripada peperiksaan IB hingga perbualan yang yakin.",p1_o1:"10 jam",p1_o2:"20 jam",per_hour:"{p} sejam",p1_trial:"Percubaan percuma 30 minit",p1_cta:"Tempah kelas percubaan percuma",
p2_tag:"Kumpulan kecil",p2_h:"Kelas kumpulan",p2_p:"Kursus berstruktur yang membawa anda daripada perkataan pertama ke tahap pertengahan, satu sub-tahap pada satu masa.",per_person_sub:"seorang, setiap sub-tahap",per_person:"seorang",p_meta:"24 jam · 12 kelas, 2 jam setiap satu",p2_cta:"Tanya tentang kelas kumpulan",
p3_tag:"Latihan bertutur",p3_h:"Kelas perbualan",p3_p:"Dua belas kelas dengan satu fokus: bertutur. Perbualan sebenar, dipandu oleh guru penutur asli, untuk membina kelancaran dan keyakinan.",p3_meta:"Bertutur dahulu, kumpulan kecil",p3_cta:"Tanya tentang kelas perbualan",
lv_title:"Kelas kumpulan: sembilan langkah daripada perkataan pertama ke perbualan sebenar.",lv_a1:"A1 · Permulaan",lv_a2:"A2 · Asas",lv_b1:"B1 · Pertengahan",lv_note:"Setiap sub-tahap ialah 24 jam dalam 12 kelas, S$450 seorang. Tidak pasti tahap anda? Kami akan menempatkan anda selepas perbualan ringkas.",
ib_eyebrow:"Untuk keluarga IB",ib_h2:"Guru yang pernah membantu pelajar <em>seperti anak anda</em>.",ib_p1:"Guru kami pernah mengajar bahasa Sepanyol IB kepada pelajar dari sekolah antarabangsa di Singapura, termasuk SAS, Nexus dan UWC. Mereka faham sukatan, pentaksiran dan tekanan yang datang bersamanya.",ib_p2:"Sama ada anak anda dalam MYP Language Acquisition, DP Spanish ab initio atau Spanish B, pelajaran mengikut apa yang dipelajari di sekolah dan apa yang dituntut oleh peperiksaan. Bertutur diutamakan, supaya ujian lisan individu terasa biasa pada hari peperiksaan.",
ib_f1_t:"Latihan lisan individu",ib_f1_d:"Latihan bertutur berkala bersama guru penutur asli, dalam format yang digunakan IB.",ib_f2_t:"Penulisan dengan maklum balas jelas",ib_f2_d:"Tugasan penulisan gaya peperiksaan, ditanda dengan nota tepat tentang apa yang perlu diperbaiki.",ib_f3_t:"Mendengar dan membaca",ib_f3_d:"Audio dan teks bahasa Sepanyol sebenar, dilatih seperti cara peperiksaan mengujinya.",ib_f4_t:"Bukan sekadar untuk peperiksaan",ib_f4_d:"Remaja dan orang dewasa juga belajar bersama kami, untuk sekolah, pelancongan, kerja atau kerana minat.",
teach_eyebrow:"Guru kami",teach_h2:"Penutur asli. <em>Berpengalaman</em> dengan pelajar IB.",teach_p:"Setiap guru kami ialah penutur asli bahasa Sepanyol dengan pengalaman bilik darjah sebenar, termasuk mengajar pelajar IB dari sekolah antarabangsa di Singapura. Mereka juga bertauliah MOE.",schools_more:"+ LAGI",
teach_1_t:"Sepanyol asli",teach_1_d:"Sebutan semula jadi, ungkapan sebenar dan budaya di sebalik kata-kata.",teach_2_t:"Pengalaman IB",teach_2_d:"Pernah mengajar pelajar dari SAS, Nexus, UWC dan sekolah antarabangsa lain.",teach_3_t:"Dipadankan dengan teliti",teach_3_d:"Kami memadankan setiap pelajar dengan guru yang sesuai dengan tahap, matlamat dan personaliti mereka.",
badge:"GURU PENUTUR ASLI · PENGALAMAN IB · GURU PENUTUR ASLI · PENGALAMAN IB ·",
how_eyebrow:"Cara ia berfungsi",how_h2:"Dari perbualan pertama ke kelas pertama dalam <em>tiga langkah</em>.",how_1_t:"Bercakap dengan penasihat",how_1_d:"Beritahu kami tentang pelajar, tahap, matlamat dan waktu yang sesuai.",how_2_t:"Cuba satu kelas",how_2_d:"Kelas peribadi bermula dengan percubaan percuma 30 minit. Untuk kumpulan, kami tempatkan anda di tahap yang betul.",how_3_t:"Mula belajar",how_3_d:"Di rumah anda atau di bilik darjah kami, bersama guru penutur asli.",how_cta:"Mulakan dengan perbualan percuma",
why_eyebrow:"Kenapa bahasa Sepanyol",why_h2:"Satu bahasa. <em>Dunia</em> orang untuk dibualkan.",stat_1:"orang bertutur bahasa Sepanyol di seluruh dunia",stat_2:"penutur asli",stat_3:"negara dengan bahasa Sepanyol sebagai bahasa rasmi",stat_src:"Sumber: Instituto Cervantes, 2025",
faq_eyebrow:"Soalan",faq_h2:"Soalan yang baik, jawapan <em>terus terang</em>.",faq_side_t:"Ada soalan lain?",faq_side_p:"Penasihat bahasa kami sedia membantu.",
faq:[["Adakah kelas dalam talian atau bersemuka?","Bersemuka. Guru datang ke rumah anda untuk kelas peribadi, atau anda datang ke bilik darjah kami."],
["Berapakah kos kelas?","Kelas peribadi ialah S$800 untuk 10 jam atau S$1,500 untuk 20 jam. Kelas kumpulan dan perbualan ialah S$450 seorang untuk 24 jam (12 kelas, 2 jam setiap satu)."],
["Adakah kelas percubaan percuma?","Ya. Kelas peribadi bermula dengan percubaan percuma 30 minit, supaya anda boleh berkenalan dengan guru sebelum membuat keputusan."],
["Siapa yang mengajar?","Penutur asli bahasa Sepanyol yang pernah mengajar pelajar IB dari sekolah antarabangsa di Singapura, termasuk SAS, Nexus dan UWC."],
["Bolehkah anda membantu dengan bahasa Sepanyol IB?","Boleh. Kami menyokong MYP Language Acquisition, DP Spanish ab initio dan Spanish B, dengan fokus tambahan pada bertutur untuk ujian lisan individu."],
["Apakah tahap kelas kumpulan?","Sembilan sub-tahap dari A1.1 hingga B1.3, daripada permulaan sepenuhnya hingga pertengahan. Setiap sub-tahap ialah 24 jam."],
["Adakah waktu kelas fleksibel?","Waktu kelas peribadi diatur mengikut jadual anda. Tanya penasihat tentang tarikh mula kelas kumpulan yang akan datang."],
["Adakah hanya untuk kanak-kanak?","Tidak. Kami juga mengajar remaja dan orang dewasa, untuk peperiksaan, kerja, pelancongan atau kerana minat."]],
final_eyebrow:"Sedia bila anda sedia",final_h2:"Cari kelas bahasa Sepanyol yang tepat dalam <em>satu perbualan</em>.",final_p:"Ceritakan tentang pelajar. Kami akan beritahu dengan tepat bagaimana kami boleh membantu.",
modal_title:"Bercakap dengan penasihat bahasa",modal_p:"Pilih cara anda mahu menghubungi kami. Kami akan membantu anda mencari kelas yang betul.",modal_title_trial:"Tempah kelas percubaan percuma anda",modal_p_trial:"Ceritakan sedikit tentang pelajar dan kami akan aturkan kelas peribadi percuma selama 30 minit.",modal_wa:"Sembang di WhatsApp",modal_wa_d:"Paling pantas. Hantar mesej bila-bila masa.",modal_call:"Tempah panggilan percuma",modal_call_d:"Pilih masa yang sesuai.",modal_email:"E-mel kami",
wa_msg:"Hai! Saya ingin bertanya tentang kelas bahasa Sepanyol.",wa_msg_trial:"Hai! Saya ingin menempah kelas percubaan percuma 30 minit.",footer_tag:"Kelas bahasa Sepanyol bersemuka bersama guru penutur asli, di rumah anda atau di bilik darjah kami di Singapura.",footer_explore:"Terokai",footer_contact:"Hubungi",footer_rights:"Hak cipta terpelihara."},

id:{nav_classes:"Kelas",nav_prices:"Harga",nav_ib:"Spanyol IB",nav_teachers:"Guru",nav_faq:"FAQ",cta_short:"Hubungi konsultan",cta_long:"Bicara dengan konsultan bahasa",
hero_eyebrow:"Kelas bahasa Spanyol tatap muka · Singapura",hero_h1:"Tempat terbaik untuk belajar <em>bahasa Spanyol</em> di Singapura.",hero_sub:"Kelas nyata bersama guru penutur asli yang pernah mengajar murid IB dari sekolah internasional di Singapura. Belajar di rumah dengan guru privat, atau ikut kelompok kecil di salah satu ruang kelas kami.",hero_cta2:"Lihat harga",hero_micro:"Kelas privat diawali dengan kelas percobaan gratis 30 menit.",ph_hero:"Foto: guru dan murid di meja",chip_where:"Guru penutur asli · Di rumah Anda",
trust_1:"Guru penutur asli",trust_2:"Berpengalaman dengan murid IB",trust_3:"Di rumah Anda atau ruang kelas kami",trust_4:"Percobaan gratis 30 menit",
hum_eyebrow:"Guru nyata, ruang nyata",hum_h2:"Bahasa Spanyol dipelajari <em>secara tatap muka</em>.",hum_p1:"Bahasa hidup dalam percakapan. Di seberang meja, guru yang baik menyadari saat murid ragu, mendengar bunyi yang belum bisa mereka ucapkan dengan tepat, dan tahu persis apa yang harus dikatakan berikutnya.",hum_p2:"Itulah yang dilakukan guru kami. Seorang penutur asli duduk bersama anak Anda, mendengarkan, mengoreksi, dan menyemangati, membangun rasa percaya diri yang hanya datang dari berbicara dengan orang sungguhan.",
hum_1_t:"Mereka mendengar setiap kata",hum_1_d:"Duduk bersama, guru menangkap pelafalan, keraguan, dan kebiasaan saat itu juga.",hum_2_t:"Mereka memahami IB",hum_2_d:"Guru kami pernah mengajar murid IB dari sekolah internasional seperti SAS, Nexus, dan UWC.",hum_3_t:"Mereka membawa budayanya",hum_3_d:"Ungkapan asli, humor asli, dan cerita di balik kata-kata, dari orang yang tumbuh dengan bahasa Spanyol.",
where_eyebrow:"Tempat belajar",where_h2:"Rumah Anda atau <em>ruang kelas kami</em>.",w1_tag:"Di rumah Anda",w1_h:"Kami datang ke tempat Anda.",w1_p:"Untuk kelas privat, guru datang ke rumah Anda. Anak Anda belajar di mejanya sendiri, di waktu yang cocok untuk keluarga Anda, tanpa perlu bepergian.",w2_tag:"Di ruang kelas kami",w2_h:"Atau datang ke tempat kami.",w2_p:"Kelas privat, kelompok, dan percakapan berlangsung di ruang kelas kami, ditata untuk belajar fokus dalam kelompok kecil.",w2_addr_none:"Tanyakan kepada konsultan ruang kelas terdekat Anda.",ph_home:"Foto: pelajaran di rumah",ph_class:"Foto: ruang kelas kami",
price_eyebrow:"Kelas dan harga",price_h2:"Harga jelas, <em>sejak awal</em>.",price_sub:"Semua harga dalam dolar Singapura.",
p1_tag:"Privat",p1_h:"Kelas privat",p1_p:"Satu murid dan satu guru penutur asli, di rumah Anda atau di ruang kelas kami. Pelajaran disusun sesuai tujuan Anda, dari ujian IB sampai percakapan yang percaya diri.",p1_o1:"10 jam",p1_o2:"20 jam",per_hour:"{p} per jam",p1_trial:"Percobaan gratis 30 menit",p1_cta:"Pesan kelas percobaan gratis",
p2_tag:"Kelompok kecil",p2_h:"Kelas kelompok",p2_p:"Kursus terstruktur yang membawa Anda dari kata pertama hingga tingkat menengah, satu sub-level demi satu sub-level.",per_person_sub:"per orang, per sub-level",per_person:"per orang",p_meta:"24 jam · 12 kelas, masing-masing 2 jam",p2_cta:"Tanya tentang kelas kelompok",
p3_tag:"Latihan berbicara",p3_h:"Kelas percakapan",p3_p:"Dua belas kelas dengan satu fokus: berbicara. Percakapan nyata, dipandu guru penutur asli, untuk membangun kelancaran dan rasa percaya diri.",p3_meta:"Berbicara dulu, kelompok kecil",p3_cta:"Tanya tentang kelas percakapan",
lv_title:"Kelas kelompok: sembilan langkah dari kata pertama ke percakapan nyata.",lv_a1:"A1 · Pemula",lv_a2:"A2 · Dasar",lv_b1:"B1 · Menengah",lv_note:"Setiap sub-level terdiri dari 24 jam dalam 12 kelas, S$450 per orang. Belum yakin dengan level Anda? Kami akan menempatkan Anda setelah obrolan singkat.",
ib_eyebrow:"Untuk keluarga IB",ib_h2:"Guru yang sudah membantu murid <em>seperti anak Anda</em>.",ib_p1:"Guru kami pernah mengajar bahasa Spanyol IB kepada murid dari sekolah internasional di Singapura, termasuk SAS, Nexus, dan UWC. Mereka memahami silabus, penilaian, dan tekanan yang menyertainya.",ib_p2:"Baik MYP Language Acquisition, DP Spanish ab initio, maupun Spanish B, pelajaran mengikuti materi sekolah dan tuntutan ujiannya. Berbicara menjadi prioritas, sehingga ujian lisan individu terasa akrab saat hari ujian.",
ib_f1_t:"Latihan lisan individu",ib_f1_d:"Latihan berbicara rutin bersama guru penutur asli, dengan format yang dipakai IB.",ib_f2_t:"Menulis dengan umpan balik jelas",ib_f2_d:"Tugas menulis bergaya ujian, dinilai dengan catatan tepat tentang apa yang perlu diperbaiki.",ib_f3_t:"Mendengar dan membaca",ib_f3_d:"Audio dan teks bahasa Spanyol asli, dilatih seperti cara ujian mengujinya.",ib_f4_t:"Bukan hanya untuk ujian",ib_f4_d:"Remaja dan dewasa juga belajar bersama kami, untuk sekolah, perjalanan, pekerjaan, atau karena cinta bahasanya.",
teach_eyebrow:"Guru kami",teach_h2:"Penutur asli. <em>Berpengalaman</em> dengan murid IB.",teach_p:"Setiap guru kami adalah penutur asli bahasa Spanyol dengan pengalaman nyata di ruang kelas, termasuk mengajar murid IB dari sekolah internasional di Singapura. Mereka juga bersertifikat MOE.",schools_more:"+ LAINNYA",
teach_1_t:"Spanyol asli",teach_1_d:"Aksen alami, ungkapan sehari-hari, dan budaya di balik kata-kata.",teach_2_t:"Pengalaman IB",teach_2_d:"Pernah mengajar murid dari SAS, Nexus, UWC, dan sekolah internasional lainnya.",teach_3_t:"Dipasangkan dengan cermat",teach_3_d:"Kami memasangkan setiap murid dengan guru yang sesuai dengan level, tujuan, dan kepribadiannya.",
badge:"GURU PENUTUR ASLI · PENGALAMAN IB · GURU PENUTUR ASLI · PENGALAMAN IB ·",
how_eyebrow:"Cara kerjanya",how_h2:"Dari obrolan pertama ke kelas pertama dalam <em>tiga langkah</em>.",how_1_t:"Bicara dengan konsultan",how_1_d:"Ceritakan tentang murid, levelnya, tujuannya, dan waktu yang cocok.",how_2_t:"Coba satu kelas",how_2_d:"Kelas privat diawali percobaan gratis 30 menit. Untuk kelompok, kami tempatkan Anda di level yang tepat.",how_3_t:"Mulai belajar",how_3_d:"Di rumah Anda atau di ruang kelas kami, bersama guru penutur asli.",how_cta:"Mulai dengan obrolan gratis",
why_eyebrow:"Mengapa bahasa Spanyol",why_h2:"Satu bahasa. <em>Dunia</em> penuh orang untuk diajak bicara.",stat_1:"orang berbahasa Spanyol di seluruh dunia",stat_2:"penutur asli",stat_3:"negara dengan bahasa Spanyol sebagai bahasa resmi",stat_src:"Sumber: Instituto Cervantes, 2025",
faq_eyebrow:"Pertanyaan",faq_h2:"Pertanyaan bagus, jawaban <em>lugas</em>.",faq_side_t:"Masih ada pertanyaan?",faq_side_p:"Konsultan bahasa kami siap membantu.",
faq:[["Apakah kelasnya online atau tatap muka?","Tatap muka. Guru datang ke rumah Anda untuk kelas privat, atau Anda datang ke ruang kelas kami."],
["Berapa biaya kelasnya?","Kelas privat S$800 untuk 10 jam atau S$1.500 untuk 20 jam. Kelas kelompok dan percakapan S$450 per orang untuk 24 jam (12 kelas, masing-masing 2 jam)."],
["Apakah ada kelas percobaan gratis?","Ada. Kelas privat diawali percobaan gratis 30 menit, jadi Anda bisa mengenal gurunya sebelum memutuskan."],
["Siapa yang mengajar?","Penutur asli bahasa Spanyol yang pernah mengajar murid IB dari sekolah internasional di Singapura, termasuk SAS, Nexus, dan UWC."],
["Bisakah membantu bahasa Spanyol IB?","Bisa. Kami mendukung MYP Language Acquisition, DP Spanish ab initio, dan Spanish B, dengan fokus ekstra pada berbicara untuk ujian lisan individu."],
["Level apa saja di kelas kelompok?","Sembilan sub-level dari A1.1 sampai B1.3, dari pemula sampai menengah. Setiap sub-level 24 jam."],
["Seberapa fleksibel jadwalnya?","Jadwal kelas privat menyesuaikan waktu Anda. Tanyakan kepada konsultan tanggal mulai kelas kelompok berikutnya."],
["Apakah hanya untuk anak-anak?","Tidak. Kami juga mengajar remaja dan dewasa, untuk ujian, pekerjaan, perjalanan, atau karena cinta bahasanya."]],
final_eyebrow:"Siap kapan pun Anda siap",final_h2:"Temukan kelas bahasa Spanyol yang tepat dalam <em>satu obrolan</em>.",final_p:"Ceritakan tentang muridnya. Kami akan menjelaskan dengan tepat bagaimana kami bisa membantu.",
modal_title:"Bicara dengan konsultan bahasa",modal_p:"Pilih cara menghubungi kami. Kami akan membantu Anda menemukan kelas yang tepat.",modal_title_trial:"Pesan kelas percobaan gratis Anda",modal_p_trial:"Ceritakan sedikit tentang murid dan kami akan mengatur kelas privat gratis selama 30 menit.",modal_wa:"Chat di WhatsApp",modal_wa_d:"Paling cepat. Kirim pesan kapan saja.",modal_call:"Pesan panggilan gratis",modal_call_d:"Pilih waktu yang cocok.",modal_email:"Kirim email",
wa_msg:"Halo! Saya ingin bertanya tentang kelas bahasa Spanyol.",wa_msg_trial:"Halo! Saya ingin memesan kelas percobaan gratis 30 menit.",footer_tag:"Kelas bahasa Spanyol tatap muka bersama guru penutur asli, di rumah Anda atau di ruang kelas kami di Singapura.",footer_explore:"Jelajahi",footer_contact:"Kontak",footer_rights:"Hak cipta dilindungi."},

ja:{nav_classes:"クラス",nav_prices:"料金",nav_ib:"IBスペイン語",nav_teachers:"講師",nav_faq:"よくある質問",cta_short:"相談する",cta_long:"語学アドバイザーに相談する",
hero_eyebrow:"対面のスペイン語クラス · シンガポール",hero_h1:"シンガポールで<em>スペイン語</em>を学ぶなら、ここが一番。",hero_sub:"シンガポールのインターナショナルスクールでIB生を教えてきたネイティブ講師による、対面のレッスン。ご自宅でのプライベートレッスンも、教室での少人数クラスも選べます。",hero_cta2:"料金を見る",hero_micro:"プライベートレッスンは30分の無料体験から始められます。",ph_hero:"写真：テーブルで学ぶ講師と生徒",chip_where:"ネイティブ講師 · ご自宅で",
trust_1:"スペイン語ネイティブ講師",trust_2:"IB生の指導経験",trust_3:"ご自宅または教室で",trust_4:"30分の無料体験",
hum_eyebrow:"本物の講師、本物の教室",hum_h2:"スペイン語は<em>対面</em>で身につく。",hum_p1:"言葉は会話の中で生きています。テーブル越しに向き合うからこそ、良い講師は生徒が迷った瞬間に気づき、まだうまく出せない音を聞き取り、次にかけるべき言葉がわかります。",hum_p2:"それが私たちの講師の仕事です。ネイティブスピーカーがお子さまの隣に座り、耳を傾け、直し、励まし、本物の人と話すことでしか得られない自信を育てます。",
hum_1_t:"一言も聞き逃さない",hum_1_d:"隣で教えるから、発音やためらい、くせをその場でとらえられます。",hum_2_t:"IBを知っている",hum_2_d:"SAS、Nexus、UWCなどのインターナショナルスクールのIB生を教えてきた講師たちです。",hum_3_t:"文化ごと伝える",hum_3_d:"スペイン語で育った講師だからこそ伝えられる、生きた表現とユーモア、言葉の背景にある物語。",
where_eyebrow:"学ぶ場所",where_h2:"ご自宅でも、<em>私たちの教室</em>でも。",w1_tag:"ご自宅で",w1_h:"講師が伺います。",w1_p:"プライベートレッスンでは講師がご自宅に伺います。お子さまはいつもの机で、ご家庭の都合のよい時間に、移動なしで学べます。",w2_tag:"教室で",w2_h:"教室にもお越しいただけます。",w2_p:"プライベート、グループ、会話クラスは私たちの教室でも開講しています。少人数で集中して学べる環境です。",w2_addr_none:"最寄りの教室はアドバイザーにお尋ねください。",ph_home:"写真：ご自宅でのレッスン",ph_class:"写真：私たちの教室",
price_eyebrow:"クラスと料金",price_h2:"料金は<em>はっきり</em>と。",price_sub:"料金はすべてシンガポールドルです。",
p1_tag:"マンツーマン",p1_h:"プライベートレッスン",p1_p:"生徒1人とネイティブ講師1人。ご自宅または教室で。IB試験から自信を持った会話まで、目標に合わせて授業を組み立てます。",p1_o1:"10時間",p1_o2:"20時間",per_hour:"1時間あたり{p}",p1_trial:"30分の無料体験",p1_cta:"無料体験レッスンを予約",
p2_tag:"少人数",p2_h:"グループクラス",p2_p:"入門から中級まで、サブレベルごとに段階的に進む体系的なコース。",per_person_sub:"1人あたり・サブレベルごと",per_person:"1人あたり",p_meta:"24時間 · 2時間×12回",p2_cta:"グループクラスについて相談",
p3_tag:"スピーキング練習",p3_h:"会話クラス",p3_p:"12回のクラスで、話すことだけに集中。ネイティブ講師がリードする本物の会話で、流暢さと自信を育てます。",p3_meta:"話すこと優先・少人数",p3_cta:"会話クラスについて相談",
lv_title:"グループクラス：最初の一言から本物の会話まで、9つのステップ。",lv_a1:"A1 · 入門",lv_a2:"A2 · 初級",lv_b1:"B1 · 中級",lv_note:"各サブレベルは2時間×12回の計24時間、1人S$450です。レベルがわからなくても大丈夫。短いご相談のあとでクラスをご案内します。",
ib_eyebrow:"IBのご家庭へ",ib_h2:"<em>お子さまのような</em>生徒を、すでに支えてきた講師たち。",ib_p1:"私たちの講師は、SAS、Nexus、UWCをはじめとするシンガポールのインターナショナルスクールの生徒にIBスペイン語を教えてきました。シラバスも評価方法も、そこにかかるプレッシャーもよく知っています。",ib_p2:"MYP Language Acquisition、DP Spanish ab initio、Spanish Bのどれでも、学校で学んでいる内容と試験で求められることに沿って授業を進めます。スピーキングを最優先にするので、試験当日には個人口頭試験が身近に感じられるはずです。",
ib_f1_t:"個人口頭試験の練習",ib_f1_d:"IBと同じ形式で、ネイティブ講師と定期的にスピーキング練習。",ib_f2_t:"わかりやすいフィードバック付きライティング",ib_f2_d:"試験形式の課題を、直すべき点を具体的に示して添削します。",ib_f3_t:"リスニングとリーディング",ib_f3_d:"本物のスペイン語の音声と文章で、試験と同じ形式で練習します。",ib_f4_t:"試験のためだけではありません",ib_f4_d:"中高生や大人の方も、学校、旅行、仕事、そして純粋な興味のために学んでいます。",
teach_eyebrow:"講師について",teach_h2:"ネイティブスピーカー。IB生の指導<em>経験</em>あり。",teach_p:"講師は全員がスペイン語ネイティブで、シンガポールのインターナショナルスクールのIB生を含め、実際の教室での指導経験があります。MOEの認定も受けています。",schools_more:"ほか",
teach_1_t:"本物のスペイン語",teach_1_d:"自然な発音、生きた表現、そして言葉の背景にある文化。",teach_2_t:"IBの指導経験",teach_2_d:"SAS、Nexus、UWCなどのインターナショナルスクールの生徒を教えてきました。",teach_3_t:"丁寧なマッチング",teach_3_d:"生徒一人ひとりのレベル、目標、性格に合う講師を選びます。",
badge:"ネイティブ講師 · IB指導経験 · ネイティブ講師 · IB指導経験 · ネイティブ講師 · IB指導経験 ·",
how_eyebrow:"受講までの流れ",how_h2:"最初のご相談から初回授業まで、<em>3ステップ</em>。",how_1_t:"アドバイザーに相談",how_1_d:"生徒のレベル、目標、ご都合のよい時間をお聞かせください。",how_2_t:"体験してみる",how_2_d:"プライベートレッスンは30分の無料体験から。グループクラスは適切なレベルにご案内します。",how_3_t:"学び始める",how_3_d:"ご自宅または教室で、ネイティブ講師と。",how_cta:"まずは無料相談から",
why_eyebrow:"なぜスペイン語？",why_h2:"ひとつの言語で、<em>世界中</em>の人と話せる。",stat_1:"世界のスペイン語話者",stat_2:"ネイティブ話者",stat_3:"スペイン語を公用語とする国",stat_src:"出典：インスティトゥト・セルバンテス（2025年）",
faq_eyebrow:"よくある質問",faq_h2:"よくある質問に、<em>率直に</em>お答えします。",faq_side_t:"ほかにご質問は？",faq_side_p:"語学アドバイザーが喜んでお答えします。",
faq:[["授業はオンラインですか、対面ですか？","対面です。プライベートレッスンは講師がご自宅に伺うか、私たちの教室で受講いただけます。"],
["料金はいくらですか？","プライベートレッスンは10時間でS$800、20時間でS$1,500です。グループクラスと会話クラスは1人S$450で、2時間×12回の計24時間です。"],
["無料体験はありますか？","はい。プライベートレッスンは30分の無料体験から始められるので、決める前に講師と会えます。"],
["誰が教えますか？","SAS、Nexus、UWCをはじめとするシンガポールのインターナショナルスクールでIB生を教えてきた、スペイン語ネイティブの講師です。"],
["IBのスペイン語に対応していますか？","はい。MYP Language Acquisition、DP Spanish ab initio、Spanish Bに対応し、個人口頭試験に向けたスピーキングに特に力を入れています。"],
["グループクラスのレベルは？","A1.1からB1.3までの9つのサブレベルで、まったくの初心者から中級までをカバーします。各サブレベルは24時間です。"],
["時間はどのくらい柔軟ですか？","プライベートレッスンはご都合に合わせて時間を決めます。グループクラスの開講日はアドバイザーにお尋ねください。"],
["子ども向けだけですか？","いいえ。中高生や大人の方も、試験、仕事、旅行、そして純粋な興味のために学んでいます。"]],
final_eyebrow:"準備ができたら、いつでも",final_h2:"ぴったりのスペイン語クラスが、<em>一度の相談</em>で見つかる。",final_p:"生徒のことを教えてください。私たちにできることを具体的にお伝えします。",
modal_title:"語学アドバイザーに相談する",modal_p:"ご希望の連絡方法をお選びください。最適なクラス探しをお手伝いします。",modal_title_trial:"無料体験レッスンを予約",modal_p_trial:"生徒のことを少し教えてください。30分の無料プライベートレッスンを手配します。",modal_wa:"WhatsAppでチャット",modal_wa_d:"最も早い方法。いつでもメッセージをどうぞ。",modal_call:"無料通話を予約",modal_call_d:"ご都合のよい時間をお選びください。",modal_email:"メールで問い合わせ",
wa_msg:"こんにちは！スペイン語クラスについて相談したいです。",wa_msg_trial:"こんにちは！30分の無料体験レッスンを予約したいです。",footer_tag:"ネイティブ講師による対面のスペイン語クラス。ご自宅、またはシンガポールの教室で。",footer_explore:"メニュー",footer_contact:"お問い合わせ",footer_rights:"無断転載を禁じます。"},

es:{nav_classes:"Clases",nav_prices:"Precios",nav_ib:"Español IB",nav_teachers:"Profesores",nav_faq:"Preguntas",cta_short:"Habla con un asesor",cta_long:"Habla con un asesor de idiomas",
hero_eyebrow:"Clases de español presenciales · Singapur",hero_h1:"El mejor lugar para aprender <em>español</em> en Singapur.",hero_sub:"Clases de verdad con profesores nativos que han enseñado a alumnos del IB de los colegios internacionales de Singapur. Aprende en casa con un profesor particular o únete a un grupo reducido en una de nuestras aulas.",hero_cta2:"Ver precios",hero_micro:"Las clases particulares empiezan con una prueba gratuita de 30 minutos.",ph_hero:"Foto: profesor y alumno en la mesa",chip_where:"Profesor nativo · En tu casa",
trust_1:"Profesores nativos",trust_2:"Experiencia con alumnos del IB",trust_3:"En tu casa o en nuestra aula",trust_4:"Prueba gratuita de 30 minutos",
hum_eyebrow:"Profesores reales, aulas reales",hum_h2:"El español se aprende <em>cara a cara</em>.",hum_p1:"Un idioma vive en la conversación. Al otro lado de la mesa, un buen profesor nota el momento en que el alumno duda, oye el sonido que todavía no le sale y sabe exactamente qué decir a continuación.",hum_p2:"Eso es lo que hacen nuestros profesores. Un nativo se sienta con tu hijo, escucha, corrige y anima, y construye la confianza que solo llega hablando con una persona real.",
hum_1_t:"Escuchan cada palabra",hum_1_d:"Sentados juntos, el profesor detecta la pronunciación, las dudas y los hábitos en el momento.",hum_2_t:"Conocen el IB",hum_2_d:"Nuestros profesores han enseñado a alumnos del IB de colegios internacionales como SAS, Nexus y UWC.",hum_3_t:"Traen la cultura con ellos",hum_3_d:"Expresiones reales, humor real y las historias detrás de las palabras, de personas que crecieron hablando español.",
where_eyebrow:"Dónde aprendes",where_h2:"Tu casa o <em>nuestra aula</em>.",w1_tag:"En tu casa",w1_h:"Vamos nosotros.",w1_p:"Para las clases particulares, el profesor va a tu casa. Tu hijo aprende en su propia mesa, a la hora que mejor le venga a tu familia, sin desplazamientos.",w2_tag:"En nuestra aula",w2_h:"O ven tú.",w2_p:"Las clases particulares, en grupo y de conversación se imparten en nuestras aulas, pensadas para aprender con concentración en grupos reducidos.",w2_addr_none:"Pregunta a un asesor por el aula más cercana.",ph_home:"Foto: una clase en casa",ph_class:"Foto: nuestra aula",
price_eyebrow:"Clases y precios",price_h2:"Precios claros, <em>desde el principio</em>.",price_sub:"Todos los precios están en dólares de Singapur.",
p1_tag:"Individual",p1_h:"Clases particulares",p1_p:"Un alumno y un profesor nativo, en tu casa o en nuestra aula. Las clases se adaptan a tus objetivos, desde los exámenes del IB hasta conversar con confianza.",p1_o1:"10 horas",p1_o2:"20 horas",per_hour:"{p} por hora",p1_trial:"Prueba gratuita de 30 min",p1_cta:"Reserva una clase de prueba gratis",
p2_tag:"Grupos reducidos",p2_h:"Clases en grupo",p2_p:"Un curso estructurado que te lleva de las primeras palabras al nivel intermedio, subnivel a subnivel.",per_person_sub:"por persona, por subnivel",per_person:"por persona",p_meta:"24 horas · 12 clases de 2 horas",p2_cta:"Pregunta por las clases en grupo",
p3_tag:"Práctica oral",p3_h:"Clases de conversación",p3_p:"Doce clases con un solo objetivo: hablar. Conversación real, guiada por un profesor nativo, para ganar fluidez y confianza.",p3_meta:"Primero hablar, grupos reducidos",p3_cta:"Pregunta por las clases de conversación",
lv_title:"Clases en grupo: nueve pasos de las primeras palabras a una conversación real.",lv_a1:"A1 · Principiante",lv_a2:"A2 · Elemental",lv_b1:"B1 · Intermedio",lv_note:"Cada subnivel son 24 horas en 12 clases, S$450 por persona. ¿No sabes tu nivel? Te ubicamos tras una breve charla.",
ib_eyebrow:"Para familias IB",ib_h2:"Profesores que ya han ayudado a alumnos <em>como tu hijo</em>.",ib_p1:"Nuestros profesores han enseñado español del IB a alumnos de colegios internacionales de Singapur, como SAS, Nexus y UWC. Conocen el temario, las evaluaciones y la presión que conllevan.",ib_p2:"Ya sea MYP Language Acquisition, DP Spanish ab initio o Spanish B, las clases siguen lo que aprende en el colegio y lo que le pide el examen. Hablar va primero, para que el oral individual le resulte familiar el día del examen.",
ib_f1_t:"Práctica del oral individual",ib_f1_d:"Práctica oral regular con un profesor nativo, con el formato que usa el IB.",ib_f2_t:"Escritura con correcciones claras",ib_f2_d:"Tareas de escritura tipo examen, corregidas con notas concretas sobre qué mejorar.",ib_f3_t:"Comprensión auditiva y lectora",ib_f3_d:"Audios y textos reales en español, practicados como los evalúa el examen.",ib_f4_t:"No solo para exámenes",ib_f4_d:"Adolescentes y adultos también aprenden con nosotros, para el colegio, viajar, trabajar o por puro placer.",
teach_eyebrow:"Nuestros profesores",teach_h2:"Nativos. Con <em>experiencia</em> en el IB.",teach_p:"Todos nuestros profesores son nativos y tienen experiencia real en el aula, incluida la enseñanza a alumnos del IB de colegios internacionales de Singapur. También tienen la certificación del MOE.",schools_more:"+ MÁS",
teach_1_t:"Español auténtico",teach_1_d:"Acento natural, expresiones reales y la cultura detrás de las palabras.",teach_2_t:"Experiencia en el IB",teach_2_d:"Han enseñado a alumnos de SAS, Nexus, UWC y otros colegios internacionales.",teach_3_t:"Elegidos con cuidado",teach_3_d:"Emparejamos a cada alumno con el profesor que mejor encaja con su nivel, objetivos y personalidad.",
badge:"PROFESORES NATIVOS · EXPERIENCIA IB · PROFESORES NATIVOS · EXPERIENCIA IB ·",
how_eyebrow:"Cómo funciona",how_h2:"De la primera charla a la primera clase en <em>tres pasos</em>.",how_1_t:"Habla con un asesor",how_1_d:"Cuéntanos el nivel del alumno, sus objetivos y los horarios que te vienen bien.",how_2_t:"Prueba una clase",how_2_d:"Las clases particulares empiezan con una prueba gratuita de 30 minutos. Para los grupos, te ubicamos en el nivel adecuado.",how_3_t:"Empieza a aprender",how_3_d:"En tu casa o en nuestra aula, con un profesor nativo.",how_cta:"Empieza con una charla gratuita",
why_eyebrow:"Por qué español",why_h2:"Un idioma. <em>Un mundo</em> de gente con quien hablar.",stat_1:"personas hablan español en el mundo",stat_2:"hablantes nativos",stat_3:"países con el español como lengua oficial",stat_src:"Fuente: Instituto Cervantes, 2025",
faq_eyebrow:"Preguntas",faq_h2:"Buenas preguntas, respuestas <em>claras</em>.",faq_side_t:"¿Tienes otra pregunta?",faq_side_p:"Nuestros asesores de idiomas estarán encantados de ayudarte.",
faq:[["¿Las clases son online o presenciales?","Presenciales. El profesor va a tu casa para las clases particulares, o vienes a una de nuestras aulas."],
["¿Cuánto cuestan las clases?","Las clases particulares cuestan S$800 por 10 horas o S$1.500 por 20 horas. Las clases en grupo y de conversación cuestan S$450 por persona por 24 horas (12 clases de 2 horas)."],
["¿Hay clase de prueba gratuita?","Sí. Las clases particulares empiezan con una prueba gratuita de 30 minutos, para que conozcas al profesor antes de decidir."],
["¿Quién da las clases?","Profesores nativos con experiencia enseñando a alumnos del IB de colegios internacionales de Singapur, como SAS, Nexus y UWC."],
["¿Podéis ayudar con el español del IB?","Sí. Trabajamos MYP Language Acquisition, DP Spanish ab initio y Spanish B, con especial atención a la expresión oral para el oral individual."],
["¿Qué niveles cubren las clases en grupo?","Nueve subniveles, de A1.1 a B1.3, desde cero hasta intermedio. Cada subnivel son 24 horas."],
["¿Qué flexibilidad hay en los horarios?","Las clases particulares se organizan según tu agenda. Pregunta a un asesor por las próximas fechas de inicio de los grupos."],
["¿Es solo para niños?","No. También enseñamos a adolescentes y adultos, para exámenes, trabajo, viajes o por amor al idioma."]],
final_eyebrow:"Cuando quieras",final_h2:"Encuentra la clase de español adecuada en <em>una sola conversación</em>.",final_p:"Cuéntanos sobre el alumno. Te diremos exactamente cómo podemos ayudar.",
modal_title:"Habla con un asesor de idiomas",modal_p:"Elige cómo prefieres contactarnos. Te ayudaremos a encontrar la clase adecuada.",modal_title_trial:"Reserva tu clase de prueba gratis",modal_p_trial:"Cuéntanos un poco sobre el alumno y organizamos una clase particular gratuita de 30 minutos.",modal_wa:"Chatea por WhatsApp",modal_wa_d:"Lo más rápido. Escríbenos cuando quieras.",modal_call:"Reserva una llamada gratuita",modal_call_d:"Elige el momento que mejor te venga.",modal_email:"Escríbenos un email",
wa_msg:"¡Hola! Me gustaría hablar sobre las clases de español.",wa_msg_trial:"¡Hola! Me gustaría reservar una clase de prueba gratuita de 30 minutos.",footer_tag:"Clases de español presenciales con profesores nativos, en tu casa o en nuestras aulas de Singapur.",footer_explore:"Explorar",footer_contact:"Contacto",footer_rights:"Todos los derechos reservados."}
};

var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var lang = 'en', mode = '';
function $(id){return document.getElementById(id);}
function t(k){return (T[lang] && T[lang][k] != null) ? T[lang][k] : T.en[k];}
function store(k,v){try{ if(v===undefined) return localStorage.getItem(k); localStorage.setItem(k,v);}catch(e){return null;}}

/* --- language: saved choice > location (time zone) > browser language > English --- */
function detect(){
  var saved = store('scs_lang');
  if (saved && T[saved]) return saved;
  var tz = '';
  try{ tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; }catch(e){}
  if (tz === 'Asia/Singapore') return 'en';
  var map = {'Asia/Shanghai':'zh','Asia/Chongqing':'zh','Asia/Harbin':'zh','Asia/Urumqi':'zh','Asia/Hong_Kong':'zh','Asia/Macau':'zh','Asia/Taipei':'zh',
    'Asia/Kuala_Lumpur':'ms','Asia/Kuching':'ms','Asia/Jakarta':'id','Asia/Pontianak':'id','Asia/Makassar':'id','Asia/Jayapura':'id',
    'Asia/Tokyo':'ja','Europe/Madrid':'es','Atlantic/Canary':'es','Africa/Ceuta':'es'};
  if (map[tz]) return map[tz];
  var esAm = ['Mexico','Bogota','Lima','Santiago','Argentina','Caracas','Montevideo','Asuncion','La_Paz','Guayaquil','Guatemala','Tegucigalpa','El_Salvador','Managua','Costa_Rica','Panama','Havana','Santo_Domingo','Puerto_Rico','Monterrey','Cancun','Merida','Chihuahua','Hermosillo','Mazatlan','Tijuana'];
  if (tz.indexOf('America/') === 0){ for (var i=0;i<esAm.length;i++){ if (tz.indexOf(esAm[i]) > -1) return 'es'; } }
  var navs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || 'en'];
  for (var j=0;j<navs.length;j++){ var c = (navs[j]||'').slice(0,2).toLowerCase(); if (T[c]) return c; }
  return 'en';
}

function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function plus(){return '<span class="s-plus"><svg class="s-ico" viewBox="0 0 24 24"><path d="M12 5v14"/><path d="M5 12h14"/></svg></span>';}

function apply(l){
  lang = T[l] ? l : 'en';
  root.setAttribute('lang', lang === 'zh' ? 'zh-Hans' : lang);
  document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-Hans' : lang);
  var els = root.querySelectorAll('[data-i18n]');
  for (var i=0;i<els.length;i++){
    if (els[i].id === 's-addr' && CONFIG.classroomAddress) continue;
    var v = t(els[i].getAttribute('data-i18n'));
    if (v == null) continue;
    var p = els[i].getAttribute('data-p'); if (p) v = v.replace('{p}', p);
    els[i].innerHTML = v;
  }
  var bt = $('s-badge-text'); if (bt) bt.textContent = t('badge');
  /* FAQ */
  var fq = t('faq'), h = '';
  for (var f=0; f<fq.length; f++){ h += '<details><summary><span>' + esc(fq[f][0]) + '</span>' + plus() + '</summary><p>' + esc(fq[f][1]) + '</p></details>'; }
  $('s-faq-list').innerHTML = h;
  $('s-lang-cur').textContent = lang.toUpperCase();
  var opts = $('s-lang-list').querySelectorAll('button');
  for (var k=0;k<opts.length;k++){ opts[k].setAttribute('aria-selected', opts[k].getAttribute('data-l') === lang ? 'true' : 'false'); }
  setLinks();
}

/* --- language menu --- */
var list = $('s-lang-list'), lbtn = $('s-lang-btn');
LANGS.forEach(function(L){
  var li = document.createElement('li'), b = document.createElement('button');
  b.type = 'button'; b.setAttribute('role','option'); b.setAttribute('data-l', L[0]);
  b.innerHTML = '<span>'+L[1]+'</span><small>'+L[0].toUpperCase()+'</small>';
  b.addEventListener('click', function(){ store('scs_lang', L[0]); apply(L[0]); closeLang(); lbtn.focus(); });
  li.appendChild(b); list.appendChild(li);
});
function closeLang(){ list.hidden = true; lbtn.setAttribute('aria-expanded','false'); }
lbtn.addEventListener('click', function(e){ e.stopPropagation(); var open = list.hidden; list.hidden = !open; lbtn.setAttribute('aria-expanded', open ? 'true' : 'false'); });
document.addEventListener('click', function(e){ if (!list.hidden && !list.contains(e.target)) closeLang(); });

/* --- contact links (email built at runtime so it is never obfuscated) --- */
function setLinks(){
  var msg = t(mode === 'trial' ? 'wa_msg_trial' : 'wa_msg');
  var wa = 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(msg);
  $('s-opt-wa').href = wa; $('s-foot-wa').href = 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(t('wa_msg'));
  $('s-opt-call').href = CONFIG.calendarUrl;
  $('s-opt-mail').href = 'mailto:' + CONFIG.email; $('s-foot-mail').href = 'mailto:' + CONFIG.email;
  $('s-mail-show').textContent = CONFIG.email; $('s-foot-mail').textContent = CONFIG.email;
  $('s-modal-title').textContent = t(mode === 'trial' ? 'modal_title_trial' : 'modal_title');
  $('s-modal-p').textContent = t(mode === 'trial' ? 'modal_p_trial' : 'modal_p');
}

/* --- photos: if an image file is missing, fall back to the placeholder --- */
var imgs = root.querySelectorAll('.s-photo img');
for (var s=0;s<imgs.length;s++){
  imgs[s].addEventListener('error', function(){ this.remove(); });
  if (imgs[s].complete && imgs[s].naturalWidth === 0) imgs[s].remove();
}
if (CONFIG.classroomAddress) $('s-addr').textContent = CONFIG.classroomAddress;

/* --- advisor modal --- */
var modal = $('s-modal'), lastFocus = null;
function openModal(m){
  mode = m || ''; setLinks();
  lastFocus = document.activeElement;
  modal.hidden = false;
  void modal.offsetHeight; /* force reflow so the fade actually runs */
  modal.classList.add('open');
  setTimeout(function(){ var f = modal.querySelector('.s-opt'); if (f) f.focus(); }, 60);
  document.addEventListener('keydown', onKey);
}
function closeModal(){
  modal.classList.remove('open');
  document.removeEventListener('keydown', onKey);
  setTimeout(function(){ modal.hidden = true; }, reduce ? 0 : 260);
  if (lastFocus && lastFocus.focus) lastFocus.focus();
}
function onKey(e){
  if (e.key === 'Escape'){ closeModal(); return; }
  if (e.key === 'Tab'){
    var f = modal.querySelectorAll('a,button'), first = f[0], last = f[f.length-1];
    if (e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
  }
}
var adv = root.querySelectorAll('[data-advisor]');
for (var a=0;a<adv.length;a++){ adv[a].addEventListener('click', function(e){ e.preventDefault(); openModal(this.getAttribute('data-advisor')); }); }
$('s-modal-x').addEventListener('click', closeModal);
modal.addEventListener('click', function(e){ if (e.target === modal) closeModal(); });
document.addEventListener('keydown', function(e){ if (e.key === 'Escape' && !list.hidden) closeLang(); });

var nav = $('s-nav');
/* --- mobile menu --- */
var mbtn = $('s-menu-btn'), mnav = $('s-mnav');
function setMenu(open){ mnav.hidden = !open; mbtn.setAttribute('aria-expanded', open ? 'true' : 'false'); nav.classList.toggle('s-open', open); }
mbtn.addEventListener('click', function(){ setMenu(mnav.hidden); });
var mlinks = mnav.querySelectorAll('a,button');
for (var ml=0; ml<mlinks.length; ml++){ mlinks[ml].addEventListener('click', function(){ setMenu(false); }); }

/* --- smooth in-page scroll --- */
var anchors = root.querySelectorAll('a[href^="#s-"]');
for (var n=0;n<anchors.length;n++){
  anchors[n].addEventListener('click', function(e){
    var target = document.getElementById(this.getAttribute('href').slice(1));
    if (!target) return; e.preventDefault();
    target.scrollIntoView({behavior: reduce ? 'auto' : 'smooth', block:'start'});
  });
}

/* --- nav state, progress bar, floating CTA --- */
var prog = $('s-prog'), hero = $('s-top'), ticking = false;
function onScroll(){
  if (ticking) return; ticking = true;
  requestAnimationFrame(function(){
    var y = window.pageYOffset || document.documentElement.scrollTop;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    prog.style.transform = 'scaleX(' + (h > 0 ? Math.min(y / h, 1) : 0) + ')';
    nav.classList.toggle('s-scrolled', y > 40);
    root.classList.toggle('s-past', hero.getBoundingClientRect().bottom < 80);
    ticking = false;
  });
}
window.addEventListener('scroll', onScroll, {passive:true});
onScroll();

/* --- teacher's red-pen correction in the hero --- */
setTimeout(function(){ $('s-note').classList.add('go'); }, reduce ? 0 : 500);

/* --- count-up stats --- */
function countUp(el){
  var end = parseFloat(el.getAttribute('data-count')), suf = el.getAttribute('data-suffix') || '', start = null, dur = 1500;
  if (reduce){ el.textContent = end + suf; return; }
  function step(ts){ if (!start) start = ts; var p = Math.min((ts - start) / dur, 1), e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(end * e) + suf; if (p < 1) requestAnimationFrame(step); }
  requestAnimationFrame(step);
}

/* --- scroll reveals (content stays visible if anything fails) --- */
var reveals = root.querySelectorAll('.s-reveal'), counters = root.querySelectorAll('[data-count]');
if ('IntersectionObserver' in window && !reduce){
  root.classList.add('s-js');
  var groups = [];
  for (var r=0;r<reveals.length;r++){
    var par = reveals[r].parentNode, gi = groups.indexOf(par);
    if (gi < 0){ groups.push(par); par.__n = 0; }
    reveals[r].style.transitionDelay = Math.min(par.__n * 90, 360) + 'ms'; par.__n++;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){ if (en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
  }, {threshold:0.12, rootMargin:'0px 0px -40px 0px'});
  for (var q=0;q<reveals.length;q++) io.observe(reveals[q]);
  var co = new IntersectionObserver(function(entries){
    entries.forEach(function(en){ if (en.isIntersecting){ countUp(en.target); co.unobserve(en.target); } });
  }, {threshold:0.5});
  for (var c=0;c<counters.length;c++){ counters[c].textContent = '0' + (counters[c].getAttribute('data-suffix') || ''); co.observe(counters[c]); }
}

$('s-year').textContent = new Date().getFullYear();
apply(detect());
})();
