/**
 * ニュースのデータ（仮置き）
 *
 * 1記事＝1項目。新しい記事から順に並べる（一覧にもこの順で表示される）。追加するときは配列の先頭に1項目足す。
 * 記事のページの URL は /news/{date}（例: /news/2025-05-17）。同じ日に2本出すときは、仕組みの見直しが要る。
 * 本文は、段落を空行（\n\n）、段落の中の改行を \n で区切る。ここでは読みやすさのため、段落ごとの配列を join('\n\n') でつないでいる。
 * 写真は public/images/news/ に {date}.jpg、2枚目以降は {date}-2.jpg のように置く。1枚目が一覧のカードにも出る。
 *
 * TODO: データ形式（YAML / Nuxt Content など）を検討中。決まったら置き換える。
 */
import type { Localized } from '~/composables/useLocalized'

export interface NewsItem {
  /** 公開日 YYYY-MM-DD（記事ページの URL にも使う） */
  date: string
  title: Localized
  /** 写真のパス（public/ から）。1枚目が一覧のカードにも出る。空なら写真なし（カードにはロゴを出す） */
  images: string[]
  /** 本文。段落は \n\n、段落の中の改行は \n */
  body: Localized
  /** 元になった記事など、関連するページの URL（任意） */
  sourceUrl?: string
  /** 記事に埋め込む YouTube の動画の id（任意） */
  youtubeId?: string
}

export const NEWS: NewsItem[] = [
  {
    date: '2025-05-17',
    title: {
      ja: '滋賀で開催されたRoboCup@Home JapanOpen 2025 に参加しました',
      en: 'We participated in RoboCup@Home JapanOpen 2025 held in Shiga',
    },
    images: ['/images/news/2025-05-17.jpg'],
    body: {
      ja: [
        '5月2日から5月5日にかけて、RoboCup@home JapanOpen 2025に参加しました！\n今大会も、DSPL、EL、OPL、SimOPLの4つのリーグに同時出場。\n日本、タイ、マレーシア、中国などから31チームがエントリーした@Homeリーグにおいて、SOBITSは以下の賞を受賞しました！\n・@Home・Domestic Standard Platform：Beginner\'s Challenge 優勝\n・@Home・Open Platform：2位\n・@Home・Open Platform：Kachaka Challenge 1位\n・@Home・Open Platform：Best Poster Award\n・@Home・Open Platform：Open Challenge 3位',
      ].join('\n\n'),
      en: [
        'We participated in the RoboCup@home Japan Open 2025 from May 2nd to May 5th!\nThis tournament, we competed simultaneously in four leagues: DSPL, EL, OPL, and SimOPL.\nIn the @Home League, which saw 31 teams from Japan, Thailand, Malaysia, China, and other countries, SOBITS won the following awards!\n・@Home・Domestic Standard Platform: Beginner\'s Challenge Winner\n・@Home・Open Platform: 2nd Place\n・@Home・Open Platform: Kachaka Challenge 1st Place\n・@Home・Open Platform: Best Poster Award\n・@Home・Open Platform: Open Challenge 3rd Place',
      ].join('\n\n'),
    },
    sourceUrl: 'https://www.soka.ac.jp/science/news_science/2025/05/news2/',
  },
  {
    date: '2025-04-23',
    title: {
      ja: '新年度のご挨拶と新体制について',
      en: 'Greetings for the new fiscal year and new organization',
    },
    images: ['/images/news/2025-04-23.jpg', '/images/news/2025-04-23-2.jpg'],
    body: {
      ja: [
        '崔研究室・萩原研究室合同チーム SOBITS は今年度、約40人からなるチームとなりました！\n　また、新体制として、それぞれの研究室から修士1年生をチームリーダーとして活動していきます。\n　これからもSOBITSをよろしくおねがいします！',
      ].join('\n\n'),
      en: [
        'SOBITS, a joint team from the Choi and Hagiwara laboratories, has grown to approximately 40 members this year!\n　Furthermore, as part of our new structure, we will have first-year master\'s students from each lab act as team leaders.\n　We look forward to your continued support of SOBITS!',
      ].join('\n\n'),
    },
  },
  {
    date: '2025-03-13',
    title: {
      ja: 'SOBITSのメールアドレスが変わりました',
      en: 'SOBITS\' email address has changed',
    },
    images: [],
    body: {
      ja: [
        'Team SOBITSのメールアドレスが変わりました。\n　今後のご連絡は、以下のメールアドレスにてご連絡をお願いいたします。\nteam.sobits@gmail.com',
      ].join('\n\n'),
      en: [
        'Team SOBITS\' email address has changed.\n　For future inquiries, please contact us at\nteam.sobits@gmail.com',
      ].join('\n\n'),
    },
  },
  {
    date: '2024-12-12',
    title: {
      ja: 'iHR研究会に参加しました',
      en: 'Participated in the iHR Study Group',
    },
    images: ['/images/news/2024-12-12.jpg', '/images/news/2024-12-12-2.jpg', '/images/news/2024-12-12-3.jpg'],
    body: {
      ja: [
        '11月30日から12月1日に玉川大学で開催された第12回インテリジェントホームロボティクス研究会に参加しました。\n　この研究会では生活支援ロボットの競技会（インテリジェントホームロボティクスチャレンジ）とポスター発表会が実施されました。\n　SOBITSは、インテリジェントホームロボティクスチャレンジのRestaurantタスクにおいて、審査委員から高い評価を受け、Best Hospitality Awardを受賞しました。\n　ポスター発表では、博士前期課程2年の大森秀之が以下のタイトルでExcellent Poster Awardを受賞しました！\n　　・タイトル：「Segment Anything ModelとMiniCPM-Vを用いた基盤モデルによる投入口を持つ物体の検出」\n　　・著者：大森秀之，萩原良信，崔龍雲',
      ].join('\n\n'),
      en: [
        'We participated in the 12th Intelligent Home Robotics Symposium, held at Tamagawa University from November 30th to December 1st.\n　This symposium featured a life support robot competition (Intelligent Home Robotics Challenge) and a poster presentation session.\n　SOBITS received high praise from the judges in the Restaurant task of the Intelligent Home Robotics Challenge, winning the Best Hospitality Award.\n　Hideyuki Omori, a second-year master\'s student, won the Excellent Poster Award for his poster presentation!\n　　・Title: "Detection of objects with insertion slots using a basic model using the Segment Anything Model and MiniCPM-V"\n　　・Authors: Hideyuki Omori, Yoshinobu Hagiwara, and Yongwoon Choi',
      ].join('\n\n'),
    },
    sourceUrl: 'https://www.soka.ac.jp/science/news_science/2024/12/news/',
  },
  {
    date: '2024-10-03',
    title: {
      ja: '創価インターナショナルスクール・マレーシアを訪問しました',
      en: 'Visit to Soka International School Malaysia',
    },
    images: ['/images/news/2024-10-03.jpg', '/images/news/2024-10-03-2.jpg'],
    body: {
      ja: [
        '9月11日に創価インターナショナルスクール・マレーシア（SISM）に訪問しました。\n　本交流会ではSISMから100名以上の生徒が集まり、SOBITSが開発したロボットの説明やデモンストレーションをさせて頂きました！\n　実演中には、カメラマンをロボットが追いかけるという場面があり、会場は笑いと驚きに包まれました。\n　次世代のAI・ロボット人材の育成にこれからもSOBITSは挑戦していきます！',
      ].join('\n\n'),
      en: [
        'On September 11th, we visited Soka International School Malaysia (SISM).\n　More than 100 students from SISM gathered for this exchange event, where we explained and demonstrated the robot developed by SOBITS!\n　During the demonstration, the robot chased a cameraman, filling the venue with laughter and amazement.\n　SOBITS will continue to challenge itself to develop the next generation of AI and robotics talent!',
      ].join('\n\n'),
    },
    sourceUrl: 'https://www.soka.ac.jp/news/2024/10/2024-10-01-1/',
  },
  {
    date: '2024-09-09',
    title: {
      ja: 'RoboCup Malaysia Open 2024 に参加しました',
      en: 'Participated in RoboCup Malaysia Open 2024',
    },
    images: ['/images/news/2024-09-09.jpg', '/images/news/2024-09-09-2.jpg'],
    body: {
      ja: [
        '9月5日から9月8日にかけて、マレーシアのクアラルンプールで開催された"RoboCup Malaysia Open 2024"に参加しました！\n　今大会は@Homeリーグに参加し、マレーシア、中国、タイ、日本などから16チームが同リーグにエントリーするなか、以下の賞を受賞することができました！\n　　・Best HRI (Human-Robot Interaction) Award：人とロボットのコミュニケーション部門の最優秀賞\n　　・Best Presentation Award：Finalsにおけるプレゼンテーションの最優秀賞\n　また、"RoboCup Malaysia Open 2024"のシンポジウムで行った発表にて、以下の賞も受賞しました。\n　　・Best Oral Presentation賞\n　ほかにも、今大会の参加に向けてSOBITSのPR動画の作成も行いました！',
      ].join('\n\n'),
      en: [
        'We participated in the "RoboCup Malaysia Open 2024" held in Kuala Lumpur, Malaysia from September 5th to 8th!\n　We participated in the @Home League at this tournament, and among 16 teams from Malaysia, China, Thailand, Japan, and other countries, we were able to win the following awards!\n　　・Best HRI (Human-Robot Interaction) Award: Highest award in the human-robot communication category\n　　・Best Presentation Award: Best presentation at the Finals\n　We also won the following awards for our presentation at the "RoboCup Malaysia Open 2024" symposium:\n　　・Best Oral Presentation Award\n　In addition, we created a promotional video for SOBITS in preparation for this tournament!',
      ].join('\n\n'),
    },
    sourceUrl: 'https://www.soka.ac.jp/science/news_science/2024/09/robocup/',
    youtubeId: 'j4Q7na14O_0',
  },
  {
    date: '2024-04-29',
    title: {
      ja: '滋賀で開催されたRoboCup@Home JapanOpen 2024 に参加しました',
      en: 'We participated in RoboCup@Home JapanOpen 2024 held in Shiga',
    },
    images: ['/images/news/2024-04-29.jpg'],
    body: {
      ja: [
        '4月25日から4月29日にかけて、RoboCup@home JapanOpen 2024に参加しました！\n今大会も、DSPL、EL、OPL、SimOPLの4つのリーグに同時出場。\nOPLでは4連覇を達成し、SimOPLでは7年連続11回目の優勝🥇を果たしました。またELでは4位となり、DSPL5位で敢闘賞を頂きました。\nOpen ChallengeでもOPL2位🥈、Educationで3位🥉、S-OPL・DSPLでも出場いたしました！\nこの結果に満足せず、AIロボットによる新たな価値創造が行えるよう頑張って参ります！',
      ].join('\n\n'),
      en: [
        'We participated in the RoboCup@home Japan Open 2024 from April 25th to April 29th!\nThis tournament, we competed in four leagues simultaneously: DSPL, EL, OPL, and SimOPL.\nWe achieved our fourth consecutive victory in OPL and our 11th victory in SimOPL, seventh consecutive year 🥇. We also placed 4th in EL and 5th in DSPL, receiving the Fighting Spirit Award.\nIn the Open Challenge, we placed 2nd in OPL 🥈 and 3rd in Education 🥉, and also competed in S-OPL and DSPL!\nWe are not satisfied with these results and will continue to work hard to create new value with AI robots!',
      ].join('\n\n'),
    },
    sourceUrl: 'https://www.soka.ac.jp/news/2024/05/9669/',
  },
  {
    date: '2024-01-12',
    title: {
      ja: '韓国・慶尚国立大学と技術交流会を行いました！',
      en: 'Technical exchange meeting was held with Gyeongsang National University in Korea!',
    },
    images: ['/images/news/2024-01-12.jpg'],
    body: {
      ja: [
        '韓国・慶尚（キョンサン）国立大学と本学理工学部が交流協定を締結しました．\n1月12日(金)に慶尚（キョンサン）国立大学の代表メンバーが来学され，慶尚国立大学工学部機械システム工学科と本学理工学部が学部間交流協定を締結しました．\nその後，本学理工学部情報システム工学科崔研究室との交流会を行いました．\n崔研究室はロボットを用いたデモンストレーションや実機ロボットの研究，開発について発表を行い，\n活発にディスカッションを行いました．双方の学生にとって大変有意義な時間となりました．',
      ].join('\n\n'),
      en: [
        'Gyeongsang National University in Korea and the College of Science and Technology in Tohoku University have concluded an exchange agreement.\nOn Friday, January 12, representatives from Gyeongsang National University visited our campus to sign an interdepartmental exchange agreement\nbetween the Department of Mechanical Systems Engineering, College of Engineering, Gyeongsang National University and the College of Science and\nTechnology, Tohoku University.\nAfterwards, they had an exchange meeting with Choi Laboratory, Department of Information Systems Engineering, College of Science and Technology, Gyeongsang National University.\nChoi\'s laboratory gave a demonstration using a robot and presented research and development of a real robot.\nWe had a lively discussion. It was a very meaningful time for both students.',
      ].join('\n\n'),
    },
  },
  {
    date: '2023-09-25',
    title: {
      ja: '合同技術交流会を開催しました！',
      en: 'Participated in RoboCup Japan Open',
    },
    images: ['/images/news/2023-09-25.jpg'],
    body: {
      ja: [
        '9月25日、RoboCup＠Homeに参加しているTRAIL、eR@sers、Hibikino-Musashi@Home(HMA)の3チームが創価大学に来てくださり、技術交流会を開催しました。\n交流会では、SOBITSのハードウェアからソフトウェアに至るまでの戦略や工夫について共有し、特に、ハードウェアにおける細かい工夫点について熱心に意見交換を行いました。\nまた、RoboCup@Home sim-OPLの競技の１つであるHuman-Navigationのデモを行い、SOBITSのシミュレーション分野での取り組みを紹介しました。\n結果として、エデュケーションリーグは2位、オープンプラットフォームリーグではSOBITS史上初となる優勝を飾ることができました！\n参加してくださったチームの皆さんと一緒に、来春のRoboCupを盛り上げていきます！',
      ].join('\n\n'),
      en: [
        'From March 14 to 25, SOBITS participated in the RoboCup Japan Open!\nSince this competition was held online, SOBITS also organized teams in two divisions, real machines and simulation.\nAmong them, we challenged two leagues for actual machines. The Education League consisted of a presentation only, while the Open Platform League included a competition and a presentation.\nAs a result, the team came in second place in the Education League and first place the Open Platform League for the first time in SOBITS history!\nIn the Simulation League, we also had the opportunity to give a presentation at the Intelligent Home Robotics Research Conference.\nThis tournament was a memorable one for SOBITS history, including our first win in the actual equipment league, but we also found many issues to be addressed in the future.\nWe will continue to grow as a team and as individuals for the next RoboCup, so please give us your support!',
      ].join('\n\n'),
    },
  },
  {
    date: '2023-07-11',
    title: {
      ja: 'フランスのボルドーで開催されたRoboCup@Home 2023 に参加しました',
      en: 'We participated in RoboCup@Home 2023 held in Bordeaux, France',
    },
    images: ['/images/news/2023-07-11.jpg'],
    body: {
      ja: [
        '7月4日から10日にかけて、フランスのボルドーで開催されたロボカップ世界大会に参加しました。\n今回の大会はSOBITSにとって初の世界大会への挑戦となりました。これまでの日本大会で得た経験を活かして、世界大会に臨みましたが、非常に悔しい結果となりました。\nしかし今回の大会を通じて、世界大会の厳しさを実感することができました。私たちはこの結果を真摯に受け止め、世界大会で挑戦できなかった点を一つ一つ改善し、チームとして成長していきたいと思います！\n今後も引き続き、SOBITSへの応援をどうぞよろしくお願いいたします。',
      ].join('\n\n'),
      en: [
        'From July 4th to 10th, we participated in the RoboCup World Championship held in Bordeaux, France.\nThis tournament was SOBITS\' first time competing in a world championship. We used the experience we gained from previous tournaments in Japan to compete in the world championship, but the result was very disappointing.\nHowever, through this tournament we were able to experience firsthand how tough the world championship is. We take this result seriously and will work to improve one by one on the areas that we were unable to tackle at the world championship, thereby growing as a team!\nWe appreciate your continued support for SOBITS.',
      ].join('\n\n'),
    },
    sourceUrl: 'https://www.soka.ac.jp/news/2023/08/8670/',
  },
  {
    date: '2023-05-08',
    title: {
      ja: '滋賀で開催されたRoboCup@Home JapanOpen 2023 に参加しました',
      en: 'We participated in RoboCup@Home JapanOpen 2023 held in Shiga',
    },
    images: ['/images/news/2023-05-08.jpg'],
    body: {
      ja: [
        '5月3日から7日にかけて、RoboCup@home JapanOpen 2023に参加しました！\n　今大会は滋賀ダイハツアリーナで開催されました。今回はSOBITS史上初の試みとなる、DSPL、EL、OPL、SimOPLの4つのリーグに同時出場という形になりました。\n　初めての試みに苦戦もありましたが、OPLでは3連覇を達成し、SimOPLでは7年連続10回目の優勝を果たしました。またELでは3位となり、DSPLでもチームメンバーが健闘してくれました。\n　今回をもちましてOPLでの3連覇やSimOPLでの10回目の優勝という重要な節目を迎えることができました。今回の成果に満足することなく、7月にフランスで行われるRoboCup 2023に向けて、精進し続けていきたいと思います。\n　SOBITSにとって初となる世界大会になりますので、みなさまの温かい応援よろしくおねがいします',
      ].join('\n\n'),
      en: [
        'We participated in RoboCup@home JapanOpen 2023 from May 3rd to 7th!\n　This tournament was held at Shiga Daihatsu Arena. For the first time in SOBITS history, we simultaneously competed in four leagues: DSPL, EL, OPL, and SimOPL.\n　Although we struggled with this first attempt, we achieved our third consecutive OPL victory and our 10th SimOPL victory, seventh in a row. We also placed third in the EL, which our team members considered in the DSPL.\n　With this, we have reached important milestones, having won the OPL for the third consecutive year and the SimOPL for the 10th time. Rather than resting on our laurels, we will continue to work hard towards RoboCup 2023, which will be held in France in July.\n　This will be SOBITS\' first world tournament, so we appreciate your warm support!',
      ].join('\n\n'),
    },
    sourceUrl: 'https://www.robocup.or.jp/japanopen2023/',
  },
  {
    date: '2023-03-10',
    title: {
      ja: '東京大学で開催されたRoboCup@Home JapanOpen 2022 に参加しました',
      en: 'We participated in RoboCup@Home JapanOpen 2022 held at the University of Tokyo.',
    },
    images: ['/images/news/2023-03-10.jpg'],
    body: {
      ja: [
        '3月6日から9日にかけて、RoboCup@home JapanOpen 2022に参加しました！\n　今大会は東京大学で開催され、Domestic Standard Platform League、Education League、Open Platform Leagueの3つのリーグに挑戦しました。\n　DSPLリーグでは悔いの残る結果となりましたが、ELでは2位、そしてOPLでは2年連続で優勝することができました！\n　OPLでは、今大会で二連覇を達成できましたが、ここで慢心せす次回以降のロボカップに向けて、全てのリーグでの優勝を目指してまいります。\n　次回の大会に向けて、私たちのチームはもちろん個々のメンバーも一層の成長を遂げて参ります。これからも応援いただけると嬉しいです。どうぞよろしくお願い申し上げます！',
      ].join('\n\n'),
      en: [
        'We participated in the RoboCup@home Japan Open 2022 from March 6th to 9th!\n　This tournament was held at the University of Tokyo, and we competed in three leagues: the Domestic Standard Platform League, the Education League, and the Open Platform League.\n　Although we had a disappointing result in the DSPL League, we came in second in the Europa League and won the OPL for the second year in a row!\n　In the OPL, we achieved our second consecutive victory, but we will not become complacent and will aim to win all leagues in future RoboCups.\n　In preparation for the next tournament, our team, as well as each individual member, will continue to grow. We appreciate your continued support. Thank you very much!',
      ].join('\n\n'),
    },
    sourceUrl: 'https://www.soka.ac.jp/news/2023/03/8214/',
  },
  {
    date: '2022-10-26',
    title: {
      ja: '国立京都国際会議館で開催されたRoboCup@Home JapanOpen 2022 Simulation OPLに参加しました',
      en: 'We participated in RoboCup@Home JapanOpen 2022 Simulation OPL held at the Kyoto International Conference Center.',
    },
    images: ['/images/news/2022-10-26.jpg'],
    body: {
      ja: [
        '10月24日と25日、国立京都国際会議館で開催されたRoboCup@Home JapanOpen 2022 Simulation OPLに参加しました。\n　Simulation OPLでは、ロボットシミュレータやVRを活用して人間とのインタラクションを行う3つの競技が行われます。SOBITSは、これらの3つの競技全てに参加し、全ての競技で1位を獲得、総合優勝を果たしました！そして今回で、6年連続通算9回目の優勝となりました。記念すべき10回目の優勝を目指し、次回のSimulation OPLに向けて日々努力を重ねてまいります。\n　また、来春開催される本年度の実際のロボットを用いたリーグでも、良い結果を報告できるようにチーム一丸となり、全力で取り組んでいきます！！',
      ].join('\n\n'),
      en: [
        'We participated in the RoboCup@Home JapanOpen 2022 Simulation OPL, held at the Kyoto International Conference Center on October 24th and 25th.\n　Simulation OPL features three competitions that utilize robot simulators and VR to interact with humans. SOBITS participated in all three competitions, winning first place in each and achieving the overall victory! This marks our ninth victory overall, and our sixth consecutive year of victories. We will continue to work hard every day toward the next Simulation OPL, aiming for our memorable 10th victory.\n　In addition, the team will work hard together to achieve good results in this year\'s league using actual robots, which will be held next spring!!',
      ].join('\n\n'),
    },
    sourceUrl: 'https://www.robocup.or.jp/japanopen2022/#:~:text=home%20S%2DOPL-,%E5%84%AA%E5%8B%9D,%E5%89%B5%E4%BE%A1%E5%A4%A7%E5%AD%A6,-%E6%BA%96%E5%84%AA%E5%8B%9D',
  },
  {
    date: '2022-07-31',
    title: {
      ja: '7/30,7/31のオープンキャンパスでRoboCup模擬大会を行いました',
      en: 'RoboCup Mock Tournament was held at Open Campus in Soka university on 7/30 and 7/31.',
    },
    images: ['/images/news/2022-07-31.jpg'],
    body: {
      ja: [
        '7/30,7/31に大学で行われたオープンキャンパスでRoboCup模擬大会を行いました！\nオープンキャンパスが対面で開催されたことにより、幅広い年代の数多くの方に来ていただきました！\n今回は家庭環境を模した会場で、RoboCupと同じような競技を行い、来てくださった皆さんに研究室のメンバーが開発の成果を披露しました！\n他にも簡単な研究室の紹介や、ロボットの展示も行い、ロボットやその要素技術に触れていただきました！\n今後のオープンキャンパスにもSOBITSが参加する機会があるかもしれませんので、今後の情報を楽しみにお待ちください！',
      ].join('\n\n'),
      en: [
        'On 7/30 and 7/31, we held an original competition that mimicked the RoboCup at the university\'s open campus!\nThe open campus was held face-to-face, so we had a large number of visitors of all ages!\nThis time, we held a competition similar to RoboCup in a venue that imitated a home environment, and our lab members showed the results of their development to everyone who came to the event!\nWe also gave a brief introduction of our lab and exhibited our robots, giving visitors an opportunity to get to know our robots and their elemental technologies!\nSOBITS may have the opportunity to participate in future Open Campus events, so please look forward to more information in the future!',
      ].join('\n\n'),
    },
  },
  {
    date: '2022-03-25',
    title: {
      ja: 'ロボカップジャパンオープン大会2021に参加しました',
      en: 'Participation in RoboCup Japan Open 2021',
    },
    images: ['/images/news/2022-03-25.jpg'],
    body: {
      ja: [
        '3月14日から25日にかけてロボカップジャパンオープン大会に参加しました！\n今大会はオンライン開催ということで、SOBITSも実機・シミュレーションの2部門にチームを編成しました。\nその中で実機は2リーグに挑みました。エデュケーションリーグではプレゼンのみ、オープンプラットフォームリーグでは競技とプレゼンが行われました。\n結果として、エデュケーションリーグは2位、オープンプラットフォームリーグではSOBITS史上初となる優勝を飾ることができました！\nまたシミュレーションリーグでは、インテリジェントホームロボティクス研究会での講演をさせて頂きました。\n今大会は実機リーグでの初優勝など、SOBITSの歴史に残る大会になりましたが、今後の課題点も多く見つけることもできました。\n次回のロボカップに向けてチームとしても各個人としてもさらに成長してまいりますので、応援の程、よろしくお願いします！',
      ].join('\n\n'),
      en: [
        'From March 14 to 25, SOBITS participated in the RoboCup Japan Open!\nSince this competition was held online, SOBITS also organized teams in two divisions, real machines and simulation.\nAmong them, we challenged two leagues for actual machines. The Education League consisted of a presentation only, while the Open Platform League included a competition and a presentation.\nAs a result, the team came in second place in the Education League and first place the Open Platform League for the first time in SOBITS history!\nIn the Simulation League, we also had the opportunity to give a presentation at the Intelligent Home Robotics Research Conference.\nThis tournament was a memorable one for SOBITS history, including our first win in the actual equipment league, but we also found many issues to be addressed in the future.\nWe will continue to grow as a team and as individuals for the next RoboCup, so please give us your support!',
      ].join('\n\n'),
    },
    sourceUrl: 'https://www.robocup.or.jp/japanopen2021/results.html',
  },
  {
    date: '2021-12-03',
    title: {
      ja: 'ロボカップアジアパシフィック大会に参加しました',
      en: 'Participated in RoboCup Asia Pacific',
    },
    images: ['/images/news/2021-12-03.jpg'],
    body: {
      ja: [
        '11月25日から28日にかけてロボカップアジアパシフィック大会に参加しました！\n今年はオンサイト・オンラインのハイブリッド開催ということで世界各国から参加チームが集まり、SOBITSも実機・シミュレーションの2部門にチームを編成してそれぞれのリーグに挑みました。\n今大会では実機は2リーグに挑みました。各リーグに競技とプレゼンがある中で、競技で1リーグ、プレゼンでは2リーグともに優勝を飾ることができました。\nまたシミュレーションリーグでは1リーグに挑み、競技で優勝することができました。プレゼンでは惜しくも2位となりましたが、これまでの実績が評価され人工知能学会より学会賞をいただくことができました。\n今大会で様々な賞をいただきましたが、メンバーそれぞれが振り返り、自身の良かった点と今後の課題点などを深く理解することもできました。\n次回、2022年3月のロボカップジャパンオープンに向けてそれぞれが今まで以上の結果を残せるよう、さらに邁進して行きますので、応援の程、是非よろしくお願いします！',
      ].join('\n\n'),
      en: [
        'From November 25 to 28, SOBITS participated in the RoboCup Asia Pacific!\nThis year\'s RoboCup, a hybrid on-site/online event, attracted teams from all over the world, and SOBITS also organized teams in two divisions, actual and simulation, to compete in their respective leagues.\nIn this year\'s competition, teams competed in two leagues for actual equipment. Each league had a competition and a presentation, and we were able to win the competition in one league and the presentation in both leagues.\nIn the simulation league, we challenged one league and were able to win the competition. In the presentation, we regrettably came in second place, but we received the Society Award from the Japanese Society for Artificial Intelligence in recognition of our past achievements.\nAlthough we received various awards at this year\'s conference, each member was able to look back and gain a deeper understanding of what they did well and what they need to work on in the future.\nWe will continue to strive for better results in the next RoboCup Japan Open in March 2022, so please give us your support!',
      ].join('\n\n'),
    },
    sourceUrl: 'https://www.soka.ac.jp/news/2021/12/6698/',
  },
  {
    date: '2021-08-15',
    title: {
      ja: 'webサイトのリニューアル',
      en: 'Website renewal',
    },
    images: [],
    body: {
      ja: [
        'SOBITS 公式ホームページにアクセスしていただき誠にありがとうございます！\n　この度、SOBITSの公式サイトを全面リニューアル致しました。\n今回のリニューアルでは、より見やすく・より快適に利用できるホームページを目指し、デザイン・構成を一新いたしました。\n2021年のロボカップに向け、研究室内で様々な改革をしており、その一環として、大学から公式のドメインを貰うことで一からサイトを作り直しました。\nこれから幅広い人にSOBITSのことを知っていただければ幸いです。\n公式SNSもございますのでそちらの方の確認も是非よろしくお願いします！\n　今後も、最新情報の更新やコンテンツの充実に努めてまいります。\n何卒よろしくお願いいたします。',
      ].join('\n\n'),
      en: [
        'Thank you very much for accessing the official SOBITS website!\n　We are pleased to announce SOBITS\' official website has been completely renewed! In this renewal, we have renewed the design and structure of the website to make it easier to view and more comfortable to use. As part of the various reforms being undertaken in our laboratory in preparation for the RoboCup in 2021, we received an official domain name from the university and redesigned the site from scratch. We hope that a wide range of people will get to know about SOBITS. We also have an official SNS, so please check it as well!\n　We will continue to update the latest information and enrich the contents of the website. Thank you for your continued support.',
      ].join('\n\n'),
    },
  },
]
