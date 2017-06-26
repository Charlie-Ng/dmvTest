import {Injectable} from '@angular/core';

@Injectable()
export class TestsService {
  // constructor at the end

  correctAnswerCount: number = 0;

  theoryDataset: Array<{no: number, question: string, choices: Array<{[key: string]: string}>, correctAnswer: string, userAnswer: string, hasSign: boolean, signName: string}>;
  signDataset: Array<{no: number, question: string, choices: Array<{[key: string]: string}>, correctAnswer: string, userAnswer: string, hasSign: boolean, signName:string}>;
  theorySet: Array<{no: number, question: string, choices: Array<{[key: string]: string}>, correctAnswer: string, userAnswer: string, hasSign: boolean, signName: string}>;
  signSet: Array<{no: number, question: string, choices: Array<{[key: string]: string}>, correctAnswer: string, userAnswer: string, hasSign: boolean, signName: string}>;



  newTheoryTestSet() {

    // generate theory random from 0 to 185, total is 186, and we need length 36
    let theoryRanLookup: {[key:number]: boolean} = {};

    let counter: number = 0;
    while(1) {
      let ran = Math.floor(Math.random()*186);
      if(counter === 36) {
        break;
      }
      if(!theoryRanLookup[ran]) {
        counter++;
        theoryRanLookup[ran] = true;
        let theoryData = Object.assign({}, this.theoryDataset[ran]);
        theoryData.no = counter;
        this.theorySet.push(theoryData);
      }
    }
    return this.theorySet;
    // generate sign random from 0 to 34, total is 35, and we need length 12

  }

  newSignTestSet() {

    // generate sign random from 0 to 34, total is 35, and we need length 12
    let theoryRanLookup: {[key:number]: boolean} = {};

    let counter: number = 0;
    while(1) {
      let ran = Math.floor(Math.random()*35);
      if(counter === 12) {
        break;
      }
      if(!theoryRanLookup[ran]) {
        counter++;
        theoryRanLookup[ran] = true;
        let signData = Object.assign({}, this.signDataset[ran]);
        signData.no = counter;
        this.signSet.push(signData);
      }
    }
    return this.signSet;

  }

  constructor() {
    this.theorySet = [];
    this.signSet = [];
    this.theoryDataset = [
      {
        "no": 1,
        "question": "顯示輪椅的藍色信號意思是",
        "choices": [
          {
            "c": "只允許有停車證的殘疾人士停車"
          },
          {
            "a": "如果您人在車中等候，是可以暫時停車"
          },
          {
            "b": "所有殘疾人士停車，即使沒有停車證"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_93.png"
      },
      {
        "no": 2,
        "question": "您在一條四車道高速公路最左車道上駕駛，但速度低於車流。您後面的一位司機希望開快一些。您應",
        "choices": [
          {
            "c": "只有在後面有三輛或更多車輛時改換車道"
          },
          {
            "a": "如果按照法定的限速開車則無需改換車道"
          },
          {
            "b": "應當改換車道，不論您的車速是多少"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 3,
        "question": "在下雨天、下雪天或霧天打開車燈",
        "choices": [
          {
            "a": "設定在遠光燈"
          },
          {
            "c": "向其他人警告惡劣狀況"
          },
          {
            "b": "以便其他司機能夠看到您"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 4,
        "question": " 您看見前方發生了意外，您是第一個停車幫忙的人，您應在何處停下您的車",
        "choices": [
          {
            "a": "在您過了意外地點之後"
          },
          {
            "c": "靠近車道邊緣，以幫助您後面的車流慢下來"
          },
          {
            "b": "在您到達意外地點之前"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 5,
        "question": "如果您持有有條件的駕駛執照",
        "choices": [
          {
            "c": "您駕駛執照上會有年齡限制"
          },
          {
            "b": "您換領執照有特別時限"
          },
          {
            "a": "您必須在駕車時遵循特別限制"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 6,
        "question": "您必須使用安全帶",
        "choices": [
          {
            "b": "除非您正在內部停車場上駕駛"
          },
          {
            "c": "無論您何時駕駛或乘坐機動車"
          },
          {
            "a": "除非您坐在輕型卡車／野營車的後面"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 7,
        "question": "行駛的車輛時，您必須繫上安全帶",
        "choices": [
          {
            "c": "如果您的車配備安全帶"
          },
          {
            "a": "除非車輛沒有配備氣囊"
          },
          {
            "b": "除非您乘坐在小卡車或野營車後面"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 8,
        "question": "如果你對面的來車已經開始在您面前左轉，您應該",
        "choices": [
          {
            "b": "向右打方向盤來繞過它"
          },
          {
            "c": "減速或停車以防發生車禍"
          },
          {
            "a": "按喇叭警告來車司機並保持車速"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 9,
        "question": "如果您打算從斜形停車位倒車退出。您務必應當慢速倒車並",
        "choices": [
          {
            "c": "在倒車時回頭向後看"
          },
          {
            "a": "在倒車時查看後視鏡"
          },
          {
            "b": "在倒車時查看側視鏡"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 10,
        "question": "下列有關酒精飲料和駕車的陳述中，哪一項是正確的？",
        "choices": [
          {
            "b": "只要您血液中酒精濃度在法律規定限度之下， 不會影響駕車"
          },
          {
            "a": "駕駛前飲用咖啡，將有助于您去除血液內酒精"
          },
          {
            "c": " 酒精會影響您的判斷力和自控力，勿飲酒精是安全駕車"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 11,
        "question": "如果您因為酒醉被捕，並拒絕接受血液酒精濃度測試",
        "choices": [
          {
            "a": "您的駕駛執照將被至少吊銷一年"
          },
          {
            "c": "您有權在接受測試之前與律師討論"
          },
          {
            "b": "您不會被強迫抽血"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 12,
        "question": "一輛校車在您相同的道路旁停下。車上有紅燈閃動。您應該",
        "choices": [
          {
            "c": "停車直到校車開始移動，即使有紅燈閃動"
          },
          {
            "a": "先停下，然後在安全時繼續行駛"
          },
          {
            "b": "只要紅燈閃動就一直停著"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 13,
        "question": "您應該何時使用前燈",
        "choices": [
          {
            "c": "任何您看不清其他車輛的時候"
          },
          {
            "b": "日落一小時後"
          },
          {
            "a": "在任何您無法看見前方至少一英裏的時候"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 14,
        "question": "這個標誌表示",
        "choices": [
          {
            "a": "前方交通為雙向"
          },
          {
            "c": "前方兩英哩有分隔式公路"
          },
          {
            "b": "兩個車道與您同方向行駛"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_50.png"
      },
      {
        "no": 15,
        "question": "何時您不應該行使您的合法先行權",
        "choices": [
          {
            "b": "當其他駕駛者想開得更快時"
          },
          {
            "c": "永遠也不要，因為這樣做會使其他駕駛者迷惑"
          },
          {
            "a": "當這樣做有助於防止車禍時"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 16,
        "question": "阻塞十字路口是違法的",
        "choices": [
          {
            "c": "在任何情況下"
          },
          {
            "b": "除非部份橫向車輛能繞過您"
          },
          {
            "a": "除非您有先行權"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 17,
        "question": "如果夜間的對面來車亮著遠光燈，您應當怎麼辦",
        "choices": [
          {
            "c": "減速並向自己的車道正前方看"
          },
          {
            "a": "向對方司機快速閃動您自己的遠光燈"
          },
          {
            "b": "向右線或道路的右邊看"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 18,
        "question": "安全地帶是讓乘客從這裡上下公共汽車或有軌電車。您在下列狀況不可以通過安全地帶",
        "choices": [
          {
            "b": "乘客正從公共汽車或有軌電車內走出"
          },
          {
            "c": "任何時間任何理由都不能通過"
          },
          {
            "a": "全部下車乘客走到便道之前"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 19,
        "question": "您何時可穿越黃色雙實線去超過另一輛車",
        "choices": [
          {
            "c": "當您知道無車向您駛來"
          },
          {
            "b": "任何情況下都不可"
          },
          {
            "a": "當一輛慢車拒絕使用讓車道"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 20,
        "question": "轉彎車道之上有信號表示僅僅在左轉綠燈箭頭亮起時允許左轉或掉頭。信號的意思是",
        "choices": [
          {
            "b": "任何綠燈亮起都允許任何左轉或掉頭"
          },
          {
            "c": "左轉箭頭亮起時允許左轉或掉頭"
          },
          {
            "a": "您必須左轉或掉頭"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_58.png"
      },
      {
        "no": 21,
        "question": "關於霧天駕車的最好忠告是不要駕車，但是如果您必須在霧天駕車，您應該",
        "choices": [
          {
            "b": "有規律地使用您的緊急訊號閃燈"
          },
          {
            "a": "只打開泊車燈"
          },
          {
            "c": "打開您的前燈"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 22,
        "question": "您的行駛方向只有一條車道，您前方的司機常常無緣無故減速。 在這種情況下，《加州司機手冊》建議",
        "choices": [
          {
            "a": "加快速度，盡快超越這個司機"
          },
          {
            "c": "向這個司機迅速閃動您的車頭燈"
          },
          {
            "b": "保證在自己和這個司機之間有很大距離"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 23,
        "question": "公路是最滑溜的",
        "choices": [
          {
            "b": "在小雨中"
          },
          {
            "c": "在一段乾燥日子後首次開始下雨時"
          },
          {
            "a": "在大暴雨期間"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 24,
        "question": "您正駛離高速公路，看見坡道是一個彎曲的下坡，您應該",
        "choices": [
          {
            "c": "進入彎道時才踩煞車"
          },
          {
            "a": "駛入彎道前，減慢至安全時速"
          },
          {
            "b": "減慢至高速公路上標誌的時速"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 25,
        "question": "這個標誌表示",
        "choices": [
          {
            "a": "前方的路對任何方向的來車均關閉"
          },
          {
            "b": "前方的路對您的方向的來車關閉"
          },
          {
            "c": "停下，然後安全時再前行"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_38.png"
      },
      {
        "no": 26,
        "question": "在商業區掉頭",
        "choices": [
          {
            "c": "在交叉路口是合法的，除非有信號禁止掉頭"
          },
          {
            "b": "只要商業機構是教堂、公寓或俱樂部，就是合法的"
          },
          {
            "a": "永遠是非法的，因為掉頭危險"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 27,
        "question": "一輛車突然駛入您面前，造成危險狀況。您應該先採取下述哪種行動",
        "choices": [
          {
            "c": "拐進旁邊車道"
          },
          {
            "b": "腳鬆離油門"
          },
          {
            "a": "按喇叭並用力踩煞車"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 28,
        "question": "為防止車輛在光滑路面上打滑，您應該",
        "choices": [
          {
            "c": "駛入彎道或通過交叉路口時減速"
          },
          {
            "b": "如果可能，在鋪有樹葉或碎石的路面上行駛"
          },
          {
            "a": "從陡坡向下行駛時，改換為慢檔"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 29,
        "question": "如果您的車在較滑的路面打滑，您應該",
        "choices": [
          {
            "b": "立即用力踩剎車"
          },
          {
            "c": "停止踩剎車"
          },
          {
            "a": "連續輕踩輕放剎車"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 30,
        "question": "在一個沒有棚欄或管制器的鐵路交叉路口，您離交叉路口100英 尺之內，但是您在兩邊都不能看見400英尺處的鐵軌，此處的限速是",
        "choices": [
          {
            "c": "時速25英裏"
          },
          {
            "a": "時速10英裏"
          },
          {
            "b": "時速15英裏"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 31,
        "question": "您在駕車時何時只需打開泊車燈",
        "choices": [
          {
            "a": "在有霧的天氣裡"
          },
          {
            "b": "日落後30分鐘或日出前30分鐘"
          },
          {
            "c": "在任何情況下都不可以"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 32,
        "question": "“默許法＂(Implied Consent law)表明您已經同意",
        "choices": [
          {
            "b": "檢查您的車裡是否有酒精"
          },
          {
            "c": "現場做一個清醒度測試"
          },
          {
            "a": "化驗您血液中的酒精含量"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 33,
        "question": "您如何為緊急車輛讓路",
        "choices": [
          {
            "c": "立即停車，不論什麼情況"
          },
          {
            "a": "盡量停靠在道路右沿，然後停下"
          },
          {
            "b": "轉入右車道，慢慢駕駛，直到緊急車輛過去"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 34,
        "question": "您幾乎要通過交叉路口時，才意識到應左轉而不是向前。此時您應該",
        "choices": [
          {
            "a": "停在交叉路口，等至安全時左拐"
          },
          {
            "c": "倒車，觀察是否有其它車輛，然後左拐"
          },
          {
            "b": "繼續行駛至下一個交叉路口，然後找到一條返回路線"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 35,
        "question": "您被牽涉到車禍中，有人受傷。您必須向誰作出書面車禍報告",
        "choices": [
          {
            "a": "加州公路巡邏隊(CHP)"
          },
          {
            "c": "您的保險公司"
          },
          {
            "b": "車輛管理局(DMV)"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 36,
        "question": "街角正在過馬路的行人有先行權",
        "choices": [
          {
            "b": "僅在有管制的交叉路口"
          },
          {
            "a": "僅當街上劃有人行橫道"
          },
          {
            "c": "不論有無標明人行橫道"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 37,
        "question": "您在開車時如果血液酒精濃度超過法定限制",
        "choices": [
          {
            "b": "您的呼吸測醉結果是不能用於將您定罪"
          },
          {
            "c": "您的車會被立即沒收，而不論您的駕駛執照狀況"
          },
          {
            "a": "您將會收到一項命令，您的駕駛特權會被吊銷"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 38,
        "question": "關於霧天駕車的最好忠告是不要駕車，但是如果您必須在霧天駕 車，您應該使用",
        "choices": [
          {
            "a": "低燈"
          },
          {
            "c": "僅用霧燈"
          },
          {
            "b": "高燈"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 39,
        "question": "以下何處絕對不可泊車",
        "choices": [
          {
            "c": "離鐵軌二十英尺處"
          },
          {
            "b": "在殘障者專用泊車位旁邊的標有交叉斜線的空間"
          },
          {
            "a": "在小山上"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 40,
        "question": "下列哪一個情況下不得穿過道路中間的雙黃色實線",
        "choices": [
          {
            "a": "超越其他車輛時"
          },
          {
            "b": "左轉"
          },
          {
            "c": "進入私人車道時"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 41,
        "question": "路沿如漆成紅色，意思是停下或停車",
        "choices": [
          {
            "c": "僅限緊急車輛"
          },
          {
            "b": "僅有殘疾人車輛是允許的"
          },
          {
            "a": "是不允許的，但巴士除外，這時會有路標"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 42,
        "question": "您在什麼時候可以只亮著停車燈開車",
        "choices": [
          {
            "a": "日落後30分鐘或日出前30分鐘"
          },
          {
            "b": "任何情況下都不可以"
          },
          {
            "c": "在低能見度的有霧日子"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 43,
        "question": "什麼叫安全地段",
        "choices": [
          {
            "b": "高速公路分隔物旁邊的空車道"
          },
          {
            "a": "專留給行人的空間"
          },
          {
            "c": "在分隔式公路上的中央地帶"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 44,
        "question": "黃色的路緣表示",
        "choices": [
          {
            "a": "只可以裝卸物品或上下乘客"
          },
          {
            "c": "僅允許商業車輛"
          },
          {
            "b": "有限泊車，但是公共汽車可以用"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 45,
        "question": "如果在開車時發現沒有辦法促使自己保持清醒，您應該",
        "choices": [
          {
            "a": "喝咖啡"
          },
          {
            "b": "調高收音機音量"
          },
          {
            "c": "下公路休息"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 46,
        "question": "右轉時，開始於右手車道，結束於：",
        "choices": [
          {
            "a": "離路緣最近的車道"
          },
          {
            "b": "任何可行駛的車道"
          },
          {
            "c": "左車道"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 47,
        "question": "在以下情況下，您應當擴大您的汽車與前面的車輛之間的距離",
        "choices": [
          {
            "b": "後面的車盯得很緊而擁擠"
          },
          {
            "c": "行車速度低於公布的限速"
          },
          {
            "a": "跟隨小轎車"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 48,
        "question": "您剛被判決犯有在酒精影響下駕車，法官判您監禁48小時，此外，您可能：",
        "choices": [
          {
            "a": "要付罰款"
          },
          {
            "b": "失去駕駛執照長達18個月"
          },
          {
            "c": "車輛被扣留60天"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 49,
        "question": "騎自行車者必須",
        "choices": [
          {
            "b": "與車流同向而行"
          },
          {
            "a": "與車流相向而行"
          },
          {
            "c": "若無自行車道則在人行道上騎"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 50,
        "question": "如果在鐵路旁停下，您可在下列情況穿過鐵路",
        "choices": [
          {
            "c": "只有在火車完全消失時"
          },
          {
            "b": "火車通過您的道路後即可"
          },
          {
            "a": "只有在您能夠看清兩側方向時"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 51,
        "question": "交通燈是紅色的，但是治安官叫您往前開，您該怎麼辦",
        "choices": [
          {
            "a": "變換車道，緩慢行駛"
          },
          {
            "b": "照治安官說的做"
          },
          {
            "c": "等候綠燈"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 52,
        "question": "這標誌表示",
        "choices": [
          {
            "b": "前方有側路"
          },
          {
            "c": "您有先行權"
          },
          {
            "a": "另一條車道正在匯入您車道"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_103.png"
      },
      {
        "no": 53,
        "question": "一個黃色菱形信號顯示一個左轉箭頭。這一信號的意思是",
        "choices": [
          {
            "c": "只能在出現綠色箭頭時左轉"
          },
          {
            "b": "您不能左轉"
          },
          {
            "a": "道路左轉"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_102.png"
      },
      {
        "no": 54,
        "question": "您絕不可將車泊在",
        "choices": [
          {
            "a": "標有交叉斜線的空間"
          },
          {
            "c": "自行車車道"
          },
          {
            "b": "離鐵軌二十英尺遠"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 55,
        "question": "如果沒有限制線，應當將車停在那裡？",
        "choices": [
          {
            "c": "過人行道後"
          },
          {
            "a": "剛過轉彎處"
          },
          {
            "b": "在轉彎處"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 56,
        "question": "您可以駛過路上標出的雙線來超越另一輛車，如果在您路這邊的線是",
        "choices": [
          {
            "b": "實線"
          },
          {
            "c": "黃線雙實線"
          },
          {
            "a": "虛線"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 57,
        "question": " 當您沒有看見四週有車時，為什麼還需要發出訊號",
        "choices": [
          {
            "c": "您只需在換車道時才發出訊"
          },
          {
            "a": "一輛您沒有看見的車可能會撞上您"
          },
          {
            "b": "如果路上沒有別人，您就不必發出訊號"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 58,
        "question": "\"不要行走\"信號閃亮後，一名行人開始過街，這名行人在街中間時，您行車方向的交通信號燈變成綠色，您應該",
        "choices": [
          {
            "b": "如果行人不在您的車道上，繼續駕車"
          },
          {
            "a": "繼續駕車，但經過行人時應多加小心"
          },
          {
            "c": "等待，直至行人越過街道"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 59,
        "question": "您打算在一條私人車道上左轉。您打算轉入的道路在街道中間有一條車道。該車道外沿有一條實線，內沿…一條虛線。您",
        "choices": [
          {
            "b": "必須使用該車道，然後併入正常車流"
          },
          {
            "a": "可轉入該車道，然後併入正常車流"
          },
          {
            "c": "在左轉時不得轉入該車道"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_101.png"
      },
      {
        "no": 60,
        "question": "在街角的行人有先行權",
        "choices": [
          {
            "a": "僅當街上劃有人行橫道"
          },
          {
            "b": "只限在有管制的交叉路口"
          },
          {
            "c": "不論是否標明人行橫道"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 61,
        "question": "您可以駛過路上標出的雙線來超越另一輛車，如果在您路這邊的是",
        "choices": [
          {
            "c": "黃色雙實線"
          },
          {
            "b": "實線"
          },
          {
            "a": "虛線"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 62,
        "question": "您在一個交叉路口停車，看望橫向街道的視線被建築物、灌木叢或路旁停車擋住，您應該",
        "choices": [
          {
            "b": "開始駛過，但做好在其它車輛出現時立即停車的準備"
          },
          {
            "a": "看見橫向交通也有\"停\"的交通標誌，再開始駛過"
          },
          {
            "c": "通過交叉路口前，緩慢駕車，直至看清交通狀況"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 63,
        "question": "您什麼時候可以繞過鐵路平交道安全柵欄",
        "choices": [
          {
            "a": "任何情況下都不可以"
          },
          {
            "b": "在您能夠清楚看到兩邊方向時"
          },
          {
            "c": "安全棚欄好像功能不正常時"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 64,
        "question": "您剛撞上了您前面那輛車的尾部，您可能是",
        "choices": [
          {
            "b": "在車流中穿梭進出"
          },
          {
            "a": "跟得太近了"
          },
          {
            "c": "太頻繁地看後視鏡"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 65,
        "question": "您把車停下。您打算左轉，但是附近有對面來車。您應當",
        "choices": [
          {
            "c": "轉彎，因為您有優先權"
          },
          {
            "b": "讓路給對面車輛"
          },
          {
            "a": "如果附近沒有行人則立即轉彎"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 66,
        "question": "以下哪種作法最有助於改善交通流暢",
        "choices": [
          {
            "c": "取消緩衝空間"
          },
          {
            "a": "提高限速"
          },
          {
            "b": "使用公共交通"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 67,
        "question": "您何時應放棄您的法定優先權",
        "choices": [
          {
            "b": "有助於預防事故"
          },
          {
            "c": "永遠不，這將使其他駕車人感到困惑"
          },
          {
            "a": "您要避免其他駕駛人的無故挑釁"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 68,
        "question": "大卡車行駛時，很多時候與前面的車輛保持較大的空間。這額外的空間是為",
        "choices": [
          {
            "b": "卡車駕駛人用於停車"
          },
          {
            "a": "其它車輛併入下坡道時使用"
          },
          {
            "c": "其它駕駛人準備減速時使用"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 69,
        "question": "駕駛者手冊建議在高速公路上變換車道至少要提前___秒鐘發出訊號",
        "choices": [
          {
            "b": "5"
          },
          {
            "c": "7"
          },
          {
            "a": "3"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 70,
        "question": "以下哪個是發現駕車危險的好方法",
        "choices": [
          {
            "a": "集中注意您車內的反光鏡"
          },
          {
            "c": "掃視您車輛的前方"
          },
          {
            "b": "集中注意您前面的車輛"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 71,
        "question": "這個標誌表明",
        "choices": [
          {
            "c": "開慢車的人有先行權"
          },
          {
            "b": "在任何時候都在右車道開"
          },
          {
            "a": "如果您比其他人駕駛得慢，就請一直在右車道開"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_49.png"
      },
      {
        "no": 72,
        "question": "這個標誌表示",
        "choices": [
          {
            "c": "時速較慢車流應移至右道"
          },
          {
            "a": "靠右行車"
          },
          {
            "b": "換到右車道"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_46.png"
      },
      {
        "no": 73,
        "question": "當交通訊號燈出故障時，您應該",
        "choices": [
          {
            "a": "停車，然後安全時繼續行駛"
          },
          {
            "b": "減速，如有必要就停車"
          },
          {
            "c": "如果有其他車輛在場才停車"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 74,
        "question": "轉彎前最後_____英尺要發出訊號",
        "choices": [
          {
            "b": "70"
          },
          {
            "a": "50"
          },
          {
            "c": "100"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 75,
        "question": "以下有關盲點的說法哪一個是正確的",
        "choices": [
          {
            "b": "裝有兩個外面的反光鏡的車輛沒有盲點"
          },
          {
            "c": "在換到右車道時從右肩向後看，在換到左車道時從左肩向後看"
          },
          {
            "a": "您只在換到左邊或右邊的車道時才需要轉過頭 來從您右肩向後看"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 76,
        "question": "自衛性駕車是",
        "choices": [
          {
            "a": "僅看您前面的車輛"
          },
          {
            "b": "在您與您前面的車之間保持距離"
          },
          {
            "c": "保持移動您的目光，尋找可能的意外"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 77,
        "question": "閃亮煞車燈，或打開緊急閃光燈，如果您",
        "choices": [
          {
            "c": "正在停車場倒車"
          },
          {
            "a": "需要警告其他駕駛人前方有車禍"
          },
          {
            "b": "駕車時速比車流慢得多"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 78,
        "question": "您剛剛與路緣平行地將車泊好。車輪必須離路緣_____英寸之內",
        "choices": [
          {
            "c": "18"
          },
          {
            "a": "12"
          },
          {
            "b": "16"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 79,
        "question": "在單向街道上左轉進入單向街道時，使用",
        "choices": [
          {
            "c": "中央左轉車道"
          },
          {
            "a": "只要安全可使用任何車道"
          },
          {
            "b": "最靠近左邊路緣的車道"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 80,
        "question": "住宅區內，一輛車正從對面向您開來。兩輛車同時要經過一輛停在路邊的車。您應該駛向",
        "choices": [
          {
            "b": "更靠近停在路邊的車，而不是靠近對面來車"
          },
          {
            "c": "停在路邊的車和對面來車中間"
          },
          {
            "a": "更靠近對面來車，而不是靠近停在路邊的車"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 81,
        "question": "觀察後面交通的最重要時間有三個，它們分別是在您進行下列哪三個動作之前",
        "choices": [
          {
            "b": "倒車、換車道和快速減速"
          },
          {
            "c": "換車道、穿越交叉路口和快速減速"
          },
          {
            "a": "倒車、急轉彎和穿越交叉路口"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 82,
        "question": "出現濃霧或沙塵時最好怎麼辦",
        "choices": [
          {
            "b": "不要開得太慢，因為其他司機可能會撞上您"
          },
          {
            "a": "在情況改善前不要開車"
          },
          {
            "c": "輪流打開遠光燈和近光燈，以提升能見度"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 83,
        "question": "您在車中載有打開蓋子的酒精容器時駕車是否合法?",
        "choices": [
          {
            "b": "是，如果該容器在車後箱內"
          },
          {
            "a": "是，一律不合法"
          },
          {
            "c": "是，如果該容器在車後座"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 84,
        "question": "十字路口上有一個停車標誌，您應該先在何處停車",
        "choices": [
          {
            "c": "在人行橫道"
          },
          {
            "b": "駛到您能夠看見橫向交通為止"
          },
          {
            "a": "過了人行橫道"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 85,
        "question": "基本速度法例是什麼",
        "choices": [
          {
            "c": "路上交通車流的速度"
          },
          {
            "b": "絕對不能開得比標明的限速更快"
          },
          {
            "a": "絕對不能以超出當時情況所許可的安全速度駕車"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 86,
        "question": "前方的校車停下，校車的紅燈閃亮，您必須",
        "choices": [
          {
            "b": "停車，直至校車的紅燈停止閃亮"
          },
          {
            "a": "停車，直至認為全部學生已經下車"
          },
          {
            "c": "轉換車道，緩慢駕車並小心經過"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 87,
        "question": "你何時穿越黃色雙實線去超過另一輛車",
        "choices": [
          {
            "c": "當您知道無車向您駛來"
          },
          {
            "b": "任何情況下都不可"
          },
          {
            "a": "當一輛慢車拒絕使用讓車道"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 88,
        "question": "您在一條左轉車道之上看到一個信號說，\"左轉在綠燈亮時讓行\"，這信號的是什麼意思",
        "choices": [
          {
            "a": "您只能在綠燈亮時左轉"
          },
          {
            "c": "您必須等到信號燈全綠時左轉"
          },
          {
            "b": "您可在綠燈亮起並且安全時左轉"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_52.png"
      },
      {
        "no": 89,
        "question": "為什麼您的乘客應該繫安全帶",
        "choices": [
          {
            "c": "不要求乘客繫安全帶"
          },
          {
            "b": "這是法律規定"
          },
          {
            "a": "它能幫助防止車禍"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 90,
        "question": "除非另有標誌說明，在住宅區限速是多少",
        "choices": [
          {
            "a": "每小時35哩"
          },
          {
            "b": "每小時25哩"
          },
          {
            "c": "每小時30哩"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 91,
        "question": "您在有分隔帶的街道上開車，但您的方向有幾條車道。如果您需要掉頭，您應當從那條車道開始掉頭？",
        "choices": [
          {
            "c": "左車道"
          },
          {
            "b": "任何車道"
          },
          {
            "a": "中間車道"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 92,
        "question": "這個標誌表示",
        "choices": [
          {
            "a": "右邊車道將要終止"
          },
          {
            "c": "前方有限制區"
          },
          {
            "b": "前方有休息區"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_97.png"
      },
      {
        "no": 93,
        "question": "下列有關摩托車那一種說法是正確的",
        "choices": [
          {
            "c": "應當擴大跟隨摩托車的距離"
          },
          {
            "b": "摩托車不得共用車道"
          },
          {
            "a": "摩托車比較小，開車人很容易看到"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 94,
        "question": "您正在接近交通信號燈正在閃動的紅燈的交叉路口。您應當怎麼辦？",
        "choices": [
          {
            "c": "先在交叉路口前停下，直至等到綠燈亮起再繼續行駛"
          },
          {
            "a": "除非有看到其他車輛，否則在進入交叉路口時可繼續行駛"
          },
          {
            "b": "在進入交叉路口之前停下，安全時再繼續行駛"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 95,
        "question": "在“上下班高峰時間＂阻塞十字路口的交通是",
        "choices": [
          {
            "a": "不允許的，除非您有先行權"
          },
          {
            "c": "在任何情況下均不允許"
          },
          {
            "b": "不允許的，除非橫向行駛的部份車輛能繞過您"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 96,
        "question": "您如果賣車，則必須在5日以內通知",
        "choices": [
          {
            "a": "您的保險公司"
          },
          {
            "b": "您的銀行或信用卡聯盟"
          },
          {
            "c": "車輛管理局(DMV)"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 97,
        "question": "您撞了一輛泊著的車，您找不到車主，您必須怎麼辦",
        "choices": [
          {
            "b": "回家後打電話給您的保險公司"
          },
          {
            "a": "在那輛車上留一字條"
          },
          {
            "c": "等車主回來"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 98,
        "question": "您絕不可將車泊在",
        "choices": [
          {
            "b": "離鐵軌二十英尺遠"
          },
          {
            "c": "自行車車道"
          },
          {
            "a": "標有交叉斜線的空間 ."
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 99,
        "question": "您與您左邊的駕駛者同時到達交叉路口，誰該先走",
        "choices": [
          {
            "a": "您先走"
          },
          {
            "c": "誰發出轉彎訊號誰先走"
          },
          {
            "b": "您左邊的駕駛者先走"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 100,
        "question": "如果您的車子開始在水面飄滑，您應當",
        "choices": [
          {
            "c": "逐漸減速，不要踩剎車"
          },
          {
            "b": "用力踩剎車，以防止您的車子打滑"
          },
          {
            "a": "保持一定車速，以便獲得更好的牽引力"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 101,
        "question": "您正在接近交叉路口。信號燈是閃動的黃燈。您應",
        "choices": [
          {
            "c": "減速並小心通過"
          },
          {
            "b": "在通過交叉路口前停下"
          },
          {
            "a": "保持速度，但是當心其他車輛"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 102,
        "question": " 以下有關安全帶的說法哪個是正確的",
        "choices": [
          {
            "c": "年滿一歲且體重超過二十磅的小孩應該繫上安全帶乘坐前座"
          },
          {
            "b": "在裝有乘客座位安全充氣袋的車裡，嬰兒不應該乘坐前座"
          },
          {
            "a": "對12歲或以下的小孩而言，通常後座不是車中最安全的座位"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 103,
        "question": "準備開車時應當小心向前方觀察10到15秒",
        "choices": [
          {
            "c": "以及早發現隱患"
          },
          {
            "b": "因為這是法律規定"
          },
          {
            "a": "以避免使用側視鏡"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 104,
        "question": "您在一條四車道高速公的車道上開車。如果要從最右邊下高速公路，您應",
        "choices": [
          {
            "c": "在開始每次改換車道之前減速"
          },
          {
            "a": "觀察右邊所有車道並小心地一次穿過所有車道"
          },
          {
            "b": "每次改換一條車道，直到您進入正確的車道"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 105,
        "question": "加州駕駛手冊上列出兩種阻塞交通的主要駕駛行為是",
        "choices": [
          {
            "c": "無經驗駕駛和駕駛時漫不經心"
          },
          {
            "b": "追尾和併道"
          },
          {
            "a": "駕駛時東張西望和不必要地更換車道"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 106,
        "question": "如果後方的車跟得太近，您應該",
        "choices": [
          {
            "c": "示意後方緊跟的車超您的車"
          },
          {
            "a": "突然剎車，警告後方車跟太緊"
          },
          {
            "b": "小心增加您的車前方的空間"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 107,
        "question": "如果您的車將從後方遭到撞擊，您應當",
        "choices": [
          {
            "b": "踩住剎車不放"
          },
          {
            "a": "準備好在撞車後剎車"
          },
          {
            "c": "掛上空檔，關掉發動機"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 108,
        "question": "您必須在機動車輛使用的車道上當心騎自行車者，因為他們",
        "choices": [
          {
            "b": "有權與您共用道路"
          },
          {
            "c": "有先行權"
          },
          {
            "a": "必須朝迎面開來的車輛騎"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 109,
        "question": "您在沿路沿向下坡停車時，應當將車輪轉到那個方向",
        "choices": [
          {
            "c": "與路沿平行"
          },
          {
            "a": "向右，面向路沿"
          },
          {
            "b": "向左，背向路沿"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 110,
        "question": "這標誌表示",
        "choices": [
          {
            "b": "您不能從您這個方向進入道路"
          },
          {
            "c": "只有安全時才可進入"
          },
          {
            "a": "前方道路對任何方向的車輛都關閉"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_39.png"
      },
      {
        "no": 111,
        "question": "您在停車時，以下哪一情況是要將前車輪轉向路沿",
        "choices": [
          {
            "a": "面向下坡"
          },
          {
            "b": "面向上坡"
          },
          {
            "c": "在平路上"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 112,
        "question": "黃線是用於分離開",
        "choices": [
          {
            "c": "常規車道和共乘車道"
          },
          {
            "a": "單向公路的各條車道"
          },
          {
            "b": "雙向公路的正反兩個方向"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 113,
        "question": "通常，您知道您處在一輛卡車的盲點內，如果",
        "choices": [
          {
            "b": "您在它後面六英尺以外"
          },
          {
            "c": "您一直靠近該車輛的右前輪"
          },
          {
            "a": "您看不見該車輛的反光鏡"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 114,
        "question": "除非另有標明，在有小孩的學校地段的限速為",
        "choices": [
          {
            "a": "時速15英哩"
          },
          {
            "c": "時速25英哩"
          },
          {
            "b": "時速20英哩"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 115,
        "question": "有關大型卡車的以下說法哪一個是正確的",
        "choices": [
          {
            "a": "大卡車需要較長時間才能完全停下"
          },
          {
            "c": "大卡車比客車更容易操縱"
          },
          {
            "b": "所有大卡車都有氣動剎車，因此能夠迅速停下"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 116,
        "question": "下列哪種情況，在察看了行人和其他車輛之後，您可以在紅燈時右轉",
        "choices": [
          {
            "c": "只要您先減速，任何時候都可以"
          },
          {
            "b": "僅在有標誌表明這樣做是可以時"
          },
          {
            "a": "在您停車之後，並且沒有任何禁止該轉彎的標誌"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 117,
        "question": "兩排雙黃色實線距離兩英尺或更寬",
        "choices": [
          {
            "a": "只有在進入私人車道時才能夠穿過"
          },
          {
            "b": "應當看成是實心的牆壁，而不得穿過"
          },
          {
            "c": "意思是這是開始或結束左轉的車道"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 118,
        "question": " 您正駛近綠燈，但有車流擋住了交叉路口。您最好應該",
        "choices": [
          {
            "b": "如果不能通過交叉路口，不要駛進"
          },
          {
            "c": "繼續駛進交叉路口，並等候過往車流淨空"
          },
          {
            "a": "將車部份駛進交叉路口，以便確立您的優先權"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 119,
        "question": "漆成白色的路緣表示",
        "choices": [
          {
            "c": "您可以讓乘客上下車"
          },
          {
            "b": "公共汽車可以用這區邊上客"
          },
          {
            "a": "您可以裝卸物品"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 120,
        "question": "在交叉路口左轉彎，您應該",
        "choices": [
          {
            "b": "轉彎前，觀察交叉路口兩個方向的車流"
          },
          {
            "a": "轉彎前，永遠將車完全停住"
          },
          {
            "c": "將車開到交叉路口中間，然後緩慢併入車流"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 121,
        "question": "您通常應當在下列情況減速",
        "choices": [
          {
            "a": "如果看到前方相隔幾輛車的剎車燈亮起"
          },
          {
            "c": "經過受管制的車禍現場"
          },
          {
            "b": "在高速公路上準備或正在超越大卡車"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 122,
        "question": "一個黃色菱形信號顯示箭頭繞過一個障礙物。這信號的意思是",
        "choices": [
          {
            "a": "前方道路可能比較滑"
          },
          {
            "b": "前方的公路有分隔帶"
          },
          {
            "c": "前方道路有障礙物"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_3.png"
      },
      {
        "no": 123,
        "question": "安全倒車包括下列所有各項，只有一個例外",
        "choices": [
          {
            "b": "在上車之前查看車輛的後面"
          },
          {
            "a": "倒車時向右邊回頭看"
          },
          {
            "c": "倒車之前輕按喇叭"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 124,
        "question": "您何時可為了右轉而匯入自行車道",
        "choices": [
          {
            "a": "轉彎前不超過200英尺"
          },
          {
            "b": "在任何情況下都不可以"
          },
          {
            "c": "轉彎前不超過100英尺"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 125,
        "question": "您應該在夜間使用遠光燈/高燈",
        "choices": [
          {
            "c": "只要合法安全即可使用"
          },
          {
            "a": "盡量少用"
          },
          {
            "b": "只在沒有照明或較昏暗的街道上使用"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 126,
        "question": "您正在駛近一個十字路口，駕駛者手冊建議你",
        "choices": [
          {
            "b": "向左看，向右看，向左看，在駛出前再看一下右邊"
          },
          {
            "a": "向左看，向右看，在駛出前再看一下左邊"
          },
          {
            "c": "向正前方看，在駛出前再看一下左邊"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 127,
        "question": "這個標誌表示",
        "choices": [
          {
            "a": "如果有其他車輛在場就停車"
          },
          {
            "c": "在限制線兩英尺前停車"
          },
          {
            "b": "每次都要停車"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_36.png"
      },
      {
        "no": 128,
        "question": "一輛大卡車在一條三車道公路的中間車道行駛。您打算超越大卡車。最好的超車方法是：",
        "choices": [
          {
            "a": "從左邊很快超連，然後開到大卡車前方"
          },
          {
            "c": "從右邊很快超車，然後開到大卡車前方"
          },
          {
            "b": "很慢地從左邊超車，然後開到大卡車前方"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 129,
        "question": "超越另一輛車後，以下那種狀況時才能安全返回原車道",
        "choices": [
          {
            "b": "您轉過頭，看見後面有車"
          },
          {
            "c": "可以從後視鏡看見被超越車輛的兩個前車燈"
          },
          {
            "a": "被超越車輛駕駛人給您發出信號，提示您轉回原車道"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 130,
        "question": "您可以駛離路面超越另一輛車",
        "choices": [
          {
            "b": "如果您行車方向有兩條或更多條車道"
          },
          {
            "a": "如果前方車輛正左枴彎"
          },
          {
            "c": "任何狀況下都不可以"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 131,
        "question": "安全帶何時沒有效果",
        "choices": [
          {
            "b": "時速超過40英裏時"
          },
          {
            "a": "低速時"
          },
          {
            "c": "安全帶永遠是有效的"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 132,
        "question": "在轉彎之前務必小心注意摩托車，因為",
        "choices": [
          {
            "b": "摩托車在交叉路口總是擁有優先權"
          },
          {
            "a": "摩托車必須佔用一整條車道"
          },
          {
            "c": "摩托車比較小，因此不太容易看到"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 133,
        "question": "這標誌表示",
        "choices": [
          {
            "b": "另一條車道正在匯入您的車道"
          },
          {
            "c": "前方有分隔式公路"
          },
          {
            "a": "右車道將要終止"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_1.png"
      },
      {
        "no": 134,
        "question": "您在倒車時應當",
        "choices": [
          {
            "c": "依賴側視鏡和後視鏡"
          },
          {
            "a": "依賴後視鏡"
          },
          {
            "b": "從後車窗向外看"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 135,
        "question": "這個標誌表示",
        "choices": [
          {
            "c": "前方右面有側路"
          },
          {
            "a": "另一條路與您的路相交"
          },
          {
            "b": "另一條車道正在匯入您的車道"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_14.png"
      },
      {
        "no": 136,
        "question": "以下哪種做法能幫助您避免被人從後面撞上",
        "choices": [
          {
            "a": "在任何時候都打開泊車燈"
          },
          {
            "b": "在轉彎前至少100英尺就發出訊號"
          },
          {
            "c": "在轉彎前至少200英尺就使用您的緊急閃光燈"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 137,
        "question": "在開車時若往車前方觀看，您應該",
        "choices": [
          {
            "c": "來回遠近都要觀看"
          },
          {
            "b": "只需要看前那輛車"
          },
          {
            "a": "隨時保持直視"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 138,
        "question": "這標誌表示",
        "choices": [
          {
            "b": "您不能左轉"
          },
          {
            "c": "您不能進入側路"
          },
          {
            "a": "您不能做U形迴轉"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_42.png"
      },
      {
        "no": 139,
        "question": "下列那一種換線方法是正確的",
        "choices": [
          {
            "b": "打信號，回頭查看，然後換線"
          },
          {
            "c": "換線前打信號，然後迅速換線"
          },
          {
            "a": "打信號，查看鏡子，然後換線"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 140,
        "question": "您在公布限速為每小時65哩的高速公路最左車道上以每小時55哩速度駕駛。在下列情況下，您可能會因為車開得太慢而收到罰單",
        "choices": [
          {
            "c": "絕不可能，因為開車比其他人更慢總是更加安全"
          },
          {
            "b": "如果您阻擋正常和合理的車流"
          },
          {
            "a": "如果道路或氣象狀況要求您開得這麼慢"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 141,
        "question": "您想匯入高速公路車流，您的駕駛速度應該是",
        "choices": [
          {
            "a": "法定高速公路的限速"
          },
          {
            "b": "與高速公路車流相同的速度"
          },
          {
            "c": "比高速公路車流的速度每小時慢10英裏"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 142,
        "question": "轉彎或轉線時，您應該持續打信號燈，因為",
        "choices": [
          {
            "a": "完成轉彎或轉線動作前，關閉信號燈是違法的"
          },
          {
            "b": "讓其他駕駛人知道您準備轉彎或轉線"
          },
          {
            "c": "完成轉彎或轉線動作之前關閉信號燈是危險的"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 143,
        "question": "以下有關其他司機的那一種說法是正確的？",
        "choices": [
          {
            "c": "在任何情況下，絕不能假設其他司機會給您讓路"
          },
          {
            "a": "駕駛卡車的司機是專業人員，他們會特別小心，造成的風險較小"
          },
          {
            "b": "發出轉彎信號的司機總是要向所表示的轉彎信號方向轉彎"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 144,
        "question": "在一條狹窄的雙車道路上跟在您後面有五輛或更多的車輛，您應該",
        "choices": [
          {
            "c": "在安全時駛離路面，讓他們超過您"
          },
          {
            "a": "當他們試圖超過您時就加速"
          },
          {
            "b": "繼續駕駛，不要理他們"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 145,
        "question": "您在處於綠色箭頭管制的轉彎車道中。以下那一項是正確的？",
        "choices": [
          {
            "a": "任何路口的所有車輛和行人都必須讓路給您轉彎"
          },
          {
            "b": "對面所有來車和行人被紅燈攔住"
          },
          {
            "c": "您可以不查看交通情況就順著箭頭方向轉彎"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 146,
        "question": "前方有鐵路交叉路口，您看見有紅燈在閃爍，警告您有火車駛 來，您必須",
        "choices": [
          {
            "a": "停車，然後安全時再前行"
          },
          {
            "b": "慢下來，然後再過去"
          },
          {
            "c": "僅在您看見有火車駛來時才停車"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 147,
        "question": "您在一條兩車道上行駛。您在左車道行駛，有許多輛車從右邊超車。您應當",
        "choices": [
          {
            "c": "在安全時改換到右車道"
          },
          {
            "b": "停在左邊路肩上讓他們超連"
          },
          {
            "a": "繼續在自己的車道行駛，以使不阻擋車流"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 148,
        "question": "這一車道用於",
        "choices": [
          {
            "a": "在交通允許下開始或終止左轉"
          },
          {
            "c": "在交通允許下右轉"
          },
          {
            "b": "在交通允許下超過其他車輛"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_104.png"
      },
      {
        "no": 149,
        "question": "行車速度低於車流可能會",
        "choices": [
          {
            "b": "增加發生車禍的可能性"
          },
          {
            "c": "對發生車禍的可能性沒有影響"
          },
          {
            "a": "減少發生車禍的可能性"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 150,
        "question": "冰凍天氣裡，在下雪或下雨之後，哪一種地方最容易打滑",
        "choices": [
          {
            "c": "柏油路面而不是水泥路面"
          },
          {
            "b": "背陰地帶的路面"
          },
          {
            "a": "山頂"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 151,
        "question": "有關死角的以下那一種說法是正確的",
        "choices": [
          {
            "a": "無論換左線還是右線都只需要向右邊回頭看"
          },
          {
            "b": "換左線時向左邊回頭看，換右線時向右邊回頭看"
          },
          {
            "c": "車外配備兩面鏡子的車輛是沒有死角的"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 152,
        "question": "在下列情況下，小卡車後面可以有合法乘客",
        "choices": [
          {
            "a": "小卡車側板至少有24英寸高"
          },
          {
            "b": "小卡車平板上有一個車座用螺絲釘在車身上"
          },
          {
            "c": "小卡車後面配備了安全帶"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 153,
        "question": "察看您後面的車流",
        "choices": [
          {
            "b": "將幫助您知道是否有人尾隨您太緊"
          },
          {
            "c": "不是個好主意。您應該注意您前面的車流"
          },
          {
            "a": "只在您減速時才有用"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 154,
        "question": "如沒有特別說明或標示，商業區一般限速是多少？",
        "choices": [
          {
            "a": "每小時25哩"
          },
          {
            "c": "每小時35哩"
          },
          {
            "b": "每小時20哩"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 155,
        "question": "交通信號燈的紅箭頭指向右邊，表示您可以",
        "choices": [
          {
            "a": "減速和觀察車流後拐向右邊"
          },
          {
            "c": "完全停車後，再拐向右邊"
          },
          {
            "b": "先等紅箭頭變成綠色後拐向右邊"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 156,
        "question": "您在公路上行駛，突然您的輪胎泄了氣，您需要停下車求人幫 忙，您應在何處將車停下",
        "choices": [
          {
            "a": "在右手車道"
          },
          {
            "b": "離開路面"
          },
          {
            "c": "在任何離您車前部200英尺遠的別人能看見您車子的地方"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 157,
        "question": "以下有關修路工人的說法哪一個是不正確的",
        "choices": [
          {
            "b": "白色標誌告訴您已關閉的道路，前方正在修路"
          },
          {
            "c": "在建築地段的某些違規將加倍罰款"
          },
          {
            "a": "修路設備是漆成橘黃色的"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 158,
        "question": "以下有關輕型有軌車輛的說法哪一個是正確的",
        "choices": [
          {
            "b": "輕型有軌車輛可以先佔交通訊號"
          },
          {
            "a": "在公共道路上，輕型有軌車輛的責任與其他車輛不同"
          },
          {
            "c": "您必須總是從右邊超過輕型有軌車輛"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 159,
        "question": "如果您不幸捲入車禍，除了向對方出示您的駕照，您還必須提供什麼資料給對方？",
        "choices": [
          {
            "a": "只要出示您的經濟責任證明"
          },
          {
            "c": "您的經濟責任，車輛登記證明和目前居住地址"
          },
          {
            "b": "您的經濟責任和車輛登記證明"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 160,
        "question": "如果您發生車禍，車禍中出現人員傷亡或造成500元以上的損 失，您必須通知執法部門，並寫一份書面報告給",
        "choices": [
          {
            "b": "加州高速公路巡羅隊"
          },
          {
            "a": "您的保險公司"
          },
          {
            "c": "車輛管理局(DMV)"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 161,
        "question": "漆成籃色的路沿表示",
        "choices": [
          {
            "c": "車上掛有殘疾人標識牌的人可以停車"
          },
          {
            "a": "如果您在車內等候，可以暫時停車"
          },
          {
            "b": "車上未掛殘疾標識牌的殘疾人可以停車"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 162,
        "question": "黃色雙實線的意思是",
        "choices": [
          {
            "c": "您可以趕上和超過另一輛車"
          },
          {
            "a": "無論怎樣您也不可以橫穿該線"
          },
          {
            "b": "您可以進入私人車道"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 163,
        "question": "21歲或以上人士開車時血液酒精濃度達到多少或超過為非法。",
        "choices": [
          {
            "a": "0.08%"
          },
          {
            "c": "0.05%"
          },
          {
            "b": "0.10%"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 164,
        "question": "漆成綠色的路緣表示",
        "choices": [
          {
            "a": "只可在限定的時間內停車或泊車"
          },
          {
            "b": "乘客上下車地段"
          },
          {
            "c": "僅限救急車輛泊車"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 165,
        "question": "在同一條機動車道上，您必須注意觀察騎腳車的人。因為他們",
        "choices": [
          {
            "a": "騎車時必須面對迎面來車"
          },
          {
            "c": "有權與您共享車道"
          },
          {
            "b": "通常有優先權"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 166,
        "question": "您在紅色交通信號燈前等候右轉，您的車輛右側有一位行人等候穿越馬路，信號燈變綠時，誰有優先權",
        "choices": [
          {
            "b": "您只有在人行道沒有標誌時有優先權"
          },
          {
            "a": "行人有優先權"
          },
          {
            "c": "您有優先權，因為您的信號燈是綠色"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 167,
        "question": "這種形狀的桔黃色標誌表示",
        "choices": [
          {
            "b": "行駛緩慢的機動車"
          },
          {
            "a": "機動車有優先權"
          },
          {
            "c": "前方交通有危險狀況"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_81.png"
      },
      {
        "no": 168,
        "question": "您是否應該比其他車輛開得較慢",
        "choices": [
          {
            "b": "是，開慢比開得太快要安全"
          },
          {
            "a": "否，您開得太慢會阻塞交通"
          },
          {
            "c": "是，這樣可以使其他車輛也開得慢一點"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 169,
        "question": "在沒有人行橫道的十字路口，誰有先行權",
        "choices": [
          {
            "a": "車輛，但是應該慢下來"
          },
          {
            "b": "行人，但僅在有標明的人行橫道上"
          },
          {
            "c": "永遠是行人"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 170,
        "question": "盲點交叉路口的限速是",
        "choices": [
          {
            "a": "時速10英裏"
          },
          {
            "b": "時速15英裏"
          },
          {
            "c": "時速25英裏"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 171,
        "question": "在高速公路上駕車時，應注視遠方",
        "choices": [
          {
            "b": "因為您需1/4哩距離才能完全停車"
          },
          {
            "a": "以便及早發現危險狀況"
          },
          {
            "c": "因為有助您跟上車流"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 172,
        "question": "您在車禍中使人受傷，誰應該填寫事故報告",
        "choices": [
          {
            "c": "您的汽車俱樂部"
          },
          {
            "a": "您"
          },
          {
            "b": "警察"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 173,
        "question": "在街角的行人有先行權",
        "choices": [
          {
            "b": "僅在有管制的交叉路口"
          },
          {
            "c": "不論是否標明人行橫道"
          },
          {
            "a": "僅當街上劃有人行橫道"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 174,
        "question": "以下有關駕車和服用藥物的說法哪一種是正確的",
        "choices": [
          {
            "a": "大多數治頭痛或感冒的藥能使人昏昏欲睡"
          },
          {
            "c": "處方藥品在任何時候服用都是安全的"
          },
          {
            "b": "藥物和酒精能同時使用"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 175,
        "question": "進入交叉路是非法的，如果",
        "choices": [
          {
            "b": "黃色信號燈在閃動，您沒有首先停下"
          },
          {
            "c": "信號燈是黃色，您不能安全停下"
          },
          {
            "a": "在信號燈變成紅色之前您來不及完全穿過"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 176,
        "question": "以下哪種情況過十字路口是違法",
        "choices": [
          {
            "a": "訊號燈是黃燈"
          },
          {
            "c": "黃燈在閃爍，您沒有先停下"
          },
          {
            "b": "在燈變紅之前您無法完全穿過街道"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 177,
        "question": "這個信號表示",
        "choices": [
          {
            "a": "除非看見對面沒有來車,否則不要超越"
          },
          {
            "c": "不能因任何理由超越其它車輛"
          },
          {
            "b": "除非超車時不會發生危險，否則不要超越"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_44.png"
      },
      {
        "no": 178,
        "question": "如果在沒有信號管制的交叉路口，您在進入交叉路口之前沒有看到車輛穿過，則限速是多少",
        "choices": [
          {
            "b": "每小時15哩"
          },
          {
            "c": "每小時10哩"
          },
          {
            "a": "每小時25哩"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 179,
        "question": "當您離開您的車道去超另一輛車時，以下何時您可以知道您有足夠的空間回到原來的行車道",
        "choices": [
          {
            "c": "當您在另外那輛車前面的兩秒鐘後"
          },
          {
            "a": "當您超過了另外那輛車的前保險槓"
          },
          {
            "b": "當您從後視鏡中看見了該車的前部"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 180,
        "question": "下列哪個駕駛時速是正確的",
        "choices": [
          {
            "a": "加州法律沒有最低時速限制"
          },
          {
            "b": "時速越快，控制車的能力越低"
          },
          {
            "c": "當您以兩倍的時速行駛時(通常駕車時速的兩倍)，您也需要兩倍的停車空間"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 181,
        "question": "以下有關滑溜路面的說法有哪一種是正確的",
        "choices": [
          {
            "c": "熱天下雨的最初幾分鐘，路面並不滑溜"
          },
          {
            "a": "在寒冷潮濕的日子，建築物或樹木的陰影能隱藏 有冰的地方"
          },
          {
            "b": "橋樑和上跨通道最晚結凍"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 182,
        "question": "您可以駛離路面來超車",
        "choices": [
          {
            "b": "如果您前面的車輛正在左轉"
          },
          {
            "c": "任何情況下都不可以"
          },
          {
            "a": "如果與您同方向的有兩個或以上的車道"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_2.png"
      },
      {
        "no": 183,
        "question": "不帶路沿的坡形街道有兩條車道，如果要停車，您應該",
        "choices": [
          {
            "c": "將前車輪轉向右，朝向路邊"
          },
          {
            "b": "將車停得稍帶一點角度，後車輪靠近路邊"
          },
          {
            "a": "將車前輪轉向左邊，離開路邊"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 184,
        "question": "道路上公布的限速是每小時55哩。如下雨或道路潮濕時，您應該",
        "choices": [
          {
            "a": "保持每小時55哩的速度"
          },
          {
            "b": "在限速以下5到10哩的速度行駛"
          },
          {
            "c": "在限速以下20到25哩的速度行駛"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 185,
        "question": "以下哪個是合法的U形迴轉",
        "choices": [
          {
            "c": "在消防站前面"
          },
          {
            "a": "在公路有轉彎空地的地方"
          },
          {
            "b": "在路中轉彎處前150英尺"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 186,
        "question": "下列有關雙重泊車的說法哪一個是正確的",
        "choices": [
          {
            "a": "它在任何情況下都是違法的"
          },
          {
            "c": "它是違法的，除非您等在車中"
          },
          {
            "b": "如果您是在送貨則是許可的"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      }
    ];

    this.signDataset = [
      {
        "no": 1,
        "question": "以下哪個標誌告訴您，此處是鬆土帶（沒有鋪柏油）？",
        "choices": [
          {
            "b": "sign_76.png"
          },
          {
            "a": "sign_60.png"
          },
          {
            "c": "sign_50.png"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 2,
        "question": "以下哪個標誌告訴您，當綠色箭頭亮起時，你可以做什麼？",
        "choices": [
          {
            "a": "sign_58.png"
          },
          {
            "b": "sign_62.png"
          },
          {
            "c": "sign_16.png"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 3,
        "question": "以下哪個標誌告訴您，前面道路中間有分界道？",
        "choices": [
          {
            "b": "sign_105.png"
          },
          {
            "a": "sign_24.png"
          },
          {
            "c": "sign_27.png"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 4,
        "question": "以下哪個標誌告訴您，此處不准作U形轉彎？",
        "choices": [
          {
            "c": "sign_42.png"
          },
          {
            "b": "sign_40.png"
          },
          {
            "a": "sign_32.png"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 5,
        "question": "以下哪個標誌告訴您，前面有左轉彎？",
        "choices": [
          {
            "b": "sign_40.png"
          },
          {
            "c": "sign_35.png"
          },
          {
            "a": "sign_102.png"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 6,
        "question": "以下哪個標誌告訴您，此處不要作左或右轉彎？",
        "choices": [
          {
            "b": "sign_61.png"
          },
          {
            "c": "sign_13.png"
          },
          {
            "a": "sign_60.png"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 7,
        "question": "以下哪個標誌告訴您，前面道路施工？",
        "choices": [
          {
            "c": "sign_27.png"
          },
          {
            "b": "sign_72.png"
          },
          {
            "a": "sign_71.png"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 8,
        "question": "以下哪個標誌告訴您，如果你正在右線道上行駛，你必須向右轉彎？",
        "choices": [
          {
            "a": "sign_65.png"
          },
          {
            "c": "sign_61.png"
          },
          {
            "b": "sign_70.png"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 9,
        "question": "以下哪個標誌告訴您，前面道路關閉？",
        "choices": [
          {
            "c": "sign_38.png"
          },
          {
            "a": "sign_22.png"
          },
          {
            "b": "sign_106.png"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 10,
        "question": "以下哪個標誌告訴您，潮濕時路滑？",
        "choices": [
          {
            "c": "sign_107.png"
          },
          {
            "a": "sign_105.png"
          },
          {
            "b": "sign_29.png"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 11,
        "question": "以下哪個標誌告訴您，鬆軟肩道？",
        "choices": [
          {
            "c": "sign_105.png"
          },
          {
            "b": "sign_25.png"
          },
          {
            "a": "sign_23.png"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 12,
        "question": "以下哪個標誌告訴您，車輛將從右方駛入此街道？",
        "choices": [
          {
            "a": "sign_48.png"
          },
          {
            "b": "sign_4.png"
          },
          {
            "c": "sign_103.png"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 13,
        "question": "以下哪個標誌告訴您，要留意學生在此橫過街道？",
        "choices": [
          {
            "c": "sign_55.png"
          },
          {
            "a": "sign_20.png"
          },
          {
            "b": "sign_30.png"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 14,
        "question": "以下哪個標誌告訴您，要開始慢駛？",
        "choices": [
          {
            "a": "sign_37.png"
          },
          {
            "c": "sign_49.png"
          },
          {
            "b": "sign_108.png"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 15,
        "question": "以下哪個標誌告訴您，此處有沙石落下？",
        "choices": [
          {
            "b": "sign_28.png"
          },
          {
            "c": "sign_24.png"
          },
          {
            "a": "sign_21.png"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 16,
        "question": "以下哪個標誌告訴您，在右邊線道上的車輛必須在出口處駛離公路？",
        "choices": [
          {
            "a": "sign_59.png"
          },
          {
            "b": "sign_65.png"
          },
          {
            "c": "sign_35.png"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 17,
        "question": "以下哪個標誌告訴您，前面有窄橋？",
        "choices": [
          {
            "b": "sign_21.png"
          },
          {
            "c": "sign_28.png"
          },
          {
            "a": "sign_25.png"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 18,
        "question": "以下哪個標誌告訴您，要繞道行駛？",
        "choices": [
          {
            "b": "sign_33.png"
          },
          {
            "a": "sign_84.png"
          },
          {
            "c": "sign_70.png"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 19,
        "question": "以下哪個標誌告訴您，慢行車輛應該怎樣做？",
        "choices": [
          {
            "b": "sign_62.png"
          },
          {
            "c": "sign_64.png"
          },
          {
            "a": "sign_54.png"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 20,
        "question": "以下哪個標誌告訴您，前面有超車線道？",
        "choices": [
          {
            "a": "sign_14.png"
          },
          {
            "b": "sign_1.png"
          },
          {
            "c": "sign_109.png"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 21,
        "question": "以下哪個標誌告訴您，當紅燈亮時，車輛不准作任何轉變？",
        "choices": [
          {
            "a": "sign_110.png"
          },
          {
            "b": "sign_10.png"
          },
          {
            "c": "sign_8.png"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 22,
        "question": "以下哪個標誌告訴您，前面有十字路口？",
        "choices": [
          {
            "c": "sign_2.png"
          },
          {
            "b": "sign_103.png"
          },
          {
            "a": "sign_34.png"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 23,
        "question": "以下哪個標誌告訴您，車輛慢行，前面道路施工中？",
        "choices": [
          {
            "b": "sign_56.png"
          },
          {
            "a": "sign_106.png"
          },
          {
            "c": "sign_111.png"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 24,
        "question": "以下哪個標誌告訴您，要留意橫過街道的行人？",
        "choices": [
          {
            "c": "sign_80.png"
          },
          {
            "b": "sign_20.png"
          },
          {
            "a": "sign_30.png"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 25,
        "question": "以下哪個標誌告訴您，要準備停車？",
        "choices": [
          {
            "b": "sign_37.png"
          },
          {
            "c": "sign_112.png"
          },
          {
            "a": "sign_12.png"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 26,
        "question": "以下哪個標誌告訴您，此處水淹？",
        "choices": [
          {
            "c": "sign_26.png"
          },
          {
            "b": "sign_107.png"
          },
          {
            "a": "sign_71.png"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 27,
        "question": "以下哪個標誌告訴您，前面有鐵平交道？",
        "choices": [
          {
            "b": "sign_29.png"
          },
          {
            "c": "sign_32.png"
          },
          {
            "a": "sign_10.png"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 28,
        "question": "以下哪個標誌告訴您，在此處必須作右轉彎？",
        "choices": [
          {
            "c": "sign_61.png"
          },
          {
            "b": "sign_48.png"
          },
          {
            "a": "sign_45.png"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 29,
        "question": "以下哪個標誌告訴您，前面必須停車？",
        "choices": [
          {
            "a": "sign_17.png"
          },
          {
            "c": "sign_44.png"
          },
          {
            "b": "sign_8.png"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 30,
        "question": "以下哪個標誌告訴您，前面有左轉彎？",
        "choices": [
          {
            "a": "sign_47.png"
          },
          {
            "c": "sign_102.png"
          },
          {
            "b": "sign_80.png"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 31,
        "question": "以下哪個標誌告訴您，前面有交通訊號？",
        "choices": [
          {
            "b": "sign_27.png"
          },
          {
            "a": "sign_17.png"
          },
          {
            "c": "sign_2.png"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 32,
        "question": "以下哪個標誌告訴您，減速車輛必須使用避讓區域？",
        "choices": [
          {
            "a": "sign_54.png"
          },
          {
            "c": "sign_49.png"
          },
          {
            "b": "sign_62.png"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 33,
        "question": "以下哪個標誌告訴您，前面道路有人施工？",
        "choices": [
          {
            "b": "sign_72.png"
          },
          {
            "c": "sign_113.png"
          },
          {
            "a": "sign_20.png"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 34,
        "question": "以下哪個標誌告訴您，有多少鐵軌橫跨前方道路？",
        "choices": [
          {
            "a": "sign_85.png"
          },
          {
            "c": "sign_11.png"
          },
          {
            "b": "sign_5.png"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 35,
        "question": "以下哪個標誌告訴您，此處不准作任何轉彎？",
        "choices": [
          {
            "c": "sign_114.png"
          },
          {
            "b": "sign_40.png"
          },
          {
            "a": "sign_13.png"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      }
    ];

  } // end of constructor





}
