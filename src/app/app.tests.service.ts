import {Injectable} from '@angular/core';
import {AppService} from './app.service';

@Injectable()
export class TestsService {
  // constructor at the end

  theoryDataset: Array<{no: number, question: string, choices: Array<{[key: string]: string}>, correctAnswer: string, userAnswer: string, hasSign: boolean, signName: string}>;
  signDataset: Array<{no: number, question: string, choices: Array<{[key: string]: string}>, correctAnswer: string, userAnswer: string, hasSign: boolean, signName:string}>;

  theoryDatasetTraditional: Array<{no: number, question: string, choices: Array<{[key: string]: string}>, correctAnswer: string, userAnswer: string, hasSign: boolean, signName:string}>;
  signDatasetTraditional: Array<{no: number, question: string, choices: Array<{[key: string]: string}>, correctAnswer: string, userAnswer: string, hasSign: boolean, signName:string}>;

  theoryDatasetSimplified: Array<{no: number, question: string, choices: Array<{[key: string]: string}>, correctAnswer: string, userAnswer: string, hasSign: boolean, signName:string}>;
  signDatasetSimplified: Array<{no: number, question: string, choices: Array<{[key: string]: string}>, correctAnswer: string, userAnswer: string, hasSign: boolean, signName:string}>;

  theorySet: Array<{no: number, question: string, choices: Array<{[key: string]: string}>, correctAnswer: string, userAnswer: string, hasSign: boolean, signName: string}>;
  signSet: Array<{no: number, question: string, choices: Array<{[key: string]: string}>, correctAnswer: string, userAnswer: string, hasSign: boolean, signName: string}>;



  newTheoryTestSet() {
    // generate theory random from 0 to 185, total is 186, and we need length 36
    let theoryRanLookup: {[key:number]: boolean} = {};

    let counter: number = 0;
    let newTheorySet = [];
    while(1) {
      if(counter === 36) {
        break;
      }
      let ran = Math.floor(Math.random()*186);
      if(!theoryRanLookup[ran]) {
        counter++;
        theoryRanLookup[ran] = true;
        let theoryData;
        if(this.appService.isTraditional) {
          theoryData = Object.assign({}, this.theoryDatasetTraditional[ran]);
        }else{
          theoryData = Object.assign({}, this.theoryDatasetSimplified[ran]);
        }
        theoryData.no = counter;
        newTheorySet.push(theoryData);
      }
    }
    this.appService.lastTheorySet = newTheorySet;

  }

  newSignTestSet() {

    // generate sign random from 0 to 34, total is 35, and we need length 12
    let theoryRanLookup: {[key:number]: boolean} = {};

    let counter: number = 0;
    let newSignSet = [];
    while(1) {
      if(counter === 12) {
        break;
      }
      let ran = Math.floor(Math.random()*35);
      if(!theoryRanLookup[ran]) {
        counter++;
        theoryRanLookup[ran] = true;
        let signData;
        if(this.appService.isTraditional){
          signData = Object.assign({}, this.signDatasetTraditional[ran]);
        }else{
          signData = Object.assign({}, this.signDatasetSimplified[ran]);
        }
        signData.no = counter;
        newSignSet.push(signData);
      }
    }
    this.appService.lastSignSet = newSignSet;

  }

  newTest() {
    this.newTheoryTestSet();
    this.newSignTestSet();
  }

  constructor(public appService: AppService) {
    this.theorySet = [];
    this.signSet = [];
    this.theoryDatasetTraditional = [
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
    this.theoryDatasetSimplified = [
      {
        "no": 1,
        "question": "显示轮椅的蓝色信号意思是",
        "choices": [
          {
            "c": "只允许有停车证的残疾人士停车"
          },
          {
            "a": "如果您人在车中等候，是可以暂时停车"
          },
          {
            "b": "所有残疾人士停车，即使没有停车证"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_93.png"
      },
      {
        "no": 2,
        "question": "您在一条四车道高速公路最左车道上驾驶，但速度低于车流。您后面的一位司机希望开快一些。您应",
        "choices": [
          {
            "c": "只有在后面有三辆或更多车辆时改换车道"
          },
          {
            "a": "如果按照法定的限速开车则无需改换车道"
          },
          {
            "b": "应当改换车道，不论您的车速是多少​​"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 3,
        "question": "在下雨天、下雪天或雾天打开车灯",
        "choices": [
          {
            "a": "设定在远光灯"
          },
          {
            "c": "向其他人警告恶劣状况"
          },
          {
            "b": "以便其他司机能够看到您"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 4,
        "question": " 您看见前方发生了意外，您是第一个停车帮忙的人，您应在何处停下您的车",
        "choices": [
          {
            "a": "在您过了意外地点之后"
          },
          {
            "c": "靠近车道边缘，以帮助您后面的车流慢下来"
          },
          {
            "b": "在您到达意外地点之前"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 5,
        "question": "如果您持有有条件的驾驶执照",
        "choices": [
          {
            "c": "您驾驶执照上会有年龄限制"
          },
          {
            "b": "您换领执照有特别时限"
          },
          {
            "a": "您必须在驾车时遵循特别限制"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 6,
        "question": "您必须使用安全带",
        "choices": [
          {
            "b": "除非您正在内部停车场上驾驶"
          },
          {
            "c": "无论您何时驾驶或乘坐机动车"
          },
          {
            "a": "除非您坐在轻型卡车／野营车的后面"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 7,
        "question": "行驶的车辆时，您必须系上安全带",
        "choices": [
          {
            "c": "如果您的车配备安全带"
          },
          {
            "a": "除非车辆没有配备气囊"
          },
          {
            "b": "除非您乘坐在小卡车或野营车后面"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 8,
        "question": "如果你对面的来车已经开始在您面前左转，您应该",
        "choices": [
          {
            "b": "向右打方向盘来绕过它"
          },
          {
            "c": "减速或停车以防发生车祸"
          },
          {
            "a": "按喇叭警告来车司机并保持车速"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 9,
        "question": "如果您打算从斜形停车位倒车退出。您务必应当慢速倒车并",
        "choices": [
          {
            "c": "在倒车时回头向后看"
          },
          {
            "a": "在倒车时查看后视镜"
          },
          {
            "b": "在倒车时查看侧视镜"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 10,
        "question": "下列有关酒精饮料和驾车的陈述中，哪一项是正确的？",
        "choices": [
          {
            "b": "只要您血液中酒精浓度在法律规定限度之下， 不会影响驾车"
          },
          {
            "a": "驾驶前饮用咖啡，将有助于您去除血液内酒精"
          },
          {
            "c": " 酒精会影响您的判断力和自控力，勿饮酒精是安全驾车"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 11,
        "question": "如果您因为酒醉被捕，并拒绝接受血液酒精浓度测试",
        "choices": [
          {
            "a": "您的驾驶执照将被至少吊销一年"
          },
          {
            "c": "您有权在接受测试之前与律师讨论"
          },
          {
            "b": "您不会被强迫抽血"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 12,
        "question": "一辆校车在您相同的道路旁停下。车上有红灯闪动。您应该",
        "choices": [
          {
            "c": "停车直到校车开始移动，即使有红灯闪动"
          },
          {
            "a": "先停下，然后在安全时继续行驶"
          },
          {
            "b": "只要红灯闪动就一直停着"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 13,
        "question": "您应该何时使用前灯",
        "choices": [
          {
            "c": "任何您看不清其他车辆的时候"
          },
          {
            "b": "日落一小时后"
          },
          {
            "a": "在任何您无法看见前方至少一英里的时候"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 14,
        "question": "这个标志表示",
        "choices": [
          {
            "a": "前方交通为双向"
          },
          {
            "c": "前方两英哩有分隔式公路"
          },
          {
            "b": "两个车道与您同方向行驶"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_50.png"
      },
      {
        "no": 15,
        "question": "何时您不应该行使您的合法先行权",
        "choices": [
          {
            "b": "当其他驾驶者想开得更快时"
          },
          {
            "c": "永远也不要，因为这样做会使其他驾驶者迷惑"
          },
          {
            "a": "当这样做有助于防止车祸时"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 16,
        "question": "阻塞十字路口是违法的",
        "choices": [
          {
            "c": "在任何情况下"
          },
          {
            "b": "除非部份横向车辆能绕过您"
          },
          {
            "a": "除非您有先行权"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 17,
        "question": "如果夜间的对面来车亮着远光灯，您应当怎么办",
        "choices": [
          {
            "c": "减速并向自己的车道正前方看"
          },
          {
            "a": "向对方司机快速闪动您自己的远光灯"
          },
          {
            "b": "向右线或道路的右边看"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 18,
        "question": "安全地带是让乘客从这里上下公共汽车或有轨电车。您在下列状况不可以通过安全地带",
        "choices": [
          {
            "b": "乘客正从公共汽车或有轨电车内走出"
          },
          {
            "c": "任何时间任何理由都不能通过"
          },
          {
            "a": "全部下车乘客走到便道之前"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 19,
        "question": "您何时可穿越黄色双实线去超过另一辆车",
        "choices": [
          {
            "c": "当您知道无车向您驶来"
          },
          {
            "b": "任何情况下都不可"
          },
          {
            "a": "当一辆慢车拒绝使用让车道"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 20,
        "question": "转弯车道之上有信号表示仅仅在左转绿灯箭头亮起时允许左转或掉头。信号的意思是",
        "choices": [
          {
            "b": "任何绿灯亮起都允许任何左转或掉头"
          },
          {
            "c": "左转箭头亮起时允许左转或掉头"
          },
          {
            "a": "您必须左转或掉头"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_58.png"
      },
      {
        "no": 21,
        "question": "关于雾天驾车的最好忠告是不要驾车，但是如果您必须在雾天驾车，您应该",
        "choices": [
          {
            "b": "有规律地使用您的紧急讯号闪灯"
          },
          {
            "a": "只打开泊车灯"
          },
          {
            "c": "打开您的前灯"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 22,
        "question": "您的行驶方向只有一条车道，您前方的司机常常无缘无故减速。 在这种情况下，《加州司机手册》建议",
        "choices": [
          {
            "a": "加快速度，尽快超越这个司机"
          },
          {
            "c": "向这个司机迅速闪动您的车头灯"
          },
          {
            "b": "保证在自己和这个司机之间有很大距离"
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
            "c": "在一段干燥日子后首次开始下雨时"
          },
          {
            "a": "在大暴雨期间"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 24,
        "question": "您正驶离高速公路，看见坡道是一个弯曲的下坡，您应该",
        "choices": [
          {
            "c": "进入弯道时才踩煞车"
          },
          {
            "a": "驶入弯道前，减慢至安全时速"
          },
          {
            "b": "减慢至高速公路上标志的时速"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 25,
        "question": "这个标志表示",
        "choices": [
          {
            "a": "前方的路对任何方向的来车均关闭"
          },
          {
            "b": "前方的路对您的方向的来车关闭"
          },
          {
            "c": "停下，然后安全时再前行"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_38.png"
      },
      {
        "no": 26,
        "question": "在商业区掉头",
        "choices": [
          {
            "c": "在交叉路口是合法的，除非有信号禁止掉头"
          },
          {
            "b": "只要商业机构是教堂、公寓或俱乐部，就是合法的"
          },
          {
            "a": "永远是非法的，因为掉头危险"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 27,
        "question": "一辆车突然驶入您面前，造成危险状况。您应该先采取下述哪种行动",
        "choices": [
          {
            "c": "拐进旁边车道"
          },
          {
            "b": "脚松离油门"
          },
          {
            "a": "按喇叭并用力踩煞车"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 28,
        "question": "为防止车辆在光滑路面上打滑，您应该",
        "choices": [
          {
            "c": "驶入弯道或通过交叉路口时减速"
          },
          {
            "b": "如果可能，在铺有树叶或碎石的路面上行驶"
          },
          {
            "a": "从陡坡向下行驶时，改换为慢档"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 29,
        "question": "如果您的车在较滑的路面打滑，您应该",
        "choices": [
          {
            "b": "立即用力踩刹车"
          },
          {
            "c": "停止踩刹车"
          },
          {
            "a": "连续轻踩轻放刹车"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 30,
        "question": "在一个没有棚栏或管制器的铁路交叉路口，您离交叉路口100英 尺之内，但是您在两边都不能看见400英尺处的铁轨，此处的限速是",
        "choices": [
          {
            "c": "时速25英里"
          },
          {
            "a": "时速10英里"
          },
          {
            "b": "时速15英里"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 31,
        "question": "您在驾车时何时只需打开泊车灯",
        "choices": [
          {
            "a": "在有雾的天气里"
          },
          {
            "b": "日落后30分钟或日出前30分钟"
          },
          {
            "c": "在任何情况下都不可以"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 32,
        "question": "“默许法＂(Implied Consent law)表明您已经同意",
        "choices": [
          {
            "b": "检查您的车里是否有酒精"
          },
          {
            "c": "现场做一个清醒度测试"
          },
          {
            "a": "化验您血液中的酒精含量"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 33,
        "question": "您如何为紧急车辆让路",
        "choices": [
          {
            "c": "立即停车，不论什么情况"
          },
          {
            "a": "尽量停靠在道路右沿，然后停下"
          },
          {
            "b": "转入右车道，慢慢驾驶，直到紧急车辆过去"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 34,
        "question": "您几乎要通过交叉路口时，才意识到应左转而不是向前。此时您应该",
        "choices": [
          {
            "a": "停在交叉路口，等至安全时左拐"
          },
          {
            "c": "倒车，观察是否有其它车辆，然后左拐"
          },
          {
            "b": "继续行驶至下一个交叉路口，然后找到一条返回路线"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 35,
        "question": "您被牵涉到车祸中，有人受伤。您必须向谁作出书面车祸报告",
        "choices": [
          {
            "a": "加州公路巡逻队(CHP)"
          },
          {
            "c": "您的保险公司"
          },
          {
            "b": "车辆管理局(DMV)"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 36,
        "question": "街角正在过马路的行人有先行权",
        "choices": [
          {
            "b": "仅在有管制的交叉路口"
          },
          {
            "a": "仅当街上划有人行横道"
          },
          {
            "c": "不论有无标明人行横道"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 37,
        "question": "您在开车时如果血液酒精浓度超过法定限制",
        "choices": [
          {
            "b": "您的呼吸测醉结果是不能用于将您定罪"
          },
          {
            "c": "您的车会被立即没收，而不论您的驾驶执照状况"
          },
          {
            "a": "您将会收到一项命令，您的驾驶特权会被吊销"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 38,
        "question": "关于雾天驾车的最好忠告是不要驾车，但是如果您必须在雾天驾 车，您应该使用",
        "choices": [
          {
            "a": "低灯"
          },
          {
            "c": "仅用雾灯"
          },
          {
            "b": "高灯"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 39,
        "question": "以下何处绝对不可泊车",
        "choices": [
          {
            "c": "离铁轨二十英尺处"
          },
          {
            "b": "在残障者专用泊车位旁边的标有交叉斜线的空间"
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
        "question": "下列哪一个情况下不得穿过道路中间的双黄色实线",
        "choices": [
          {
            "a": "超越其他车辆时"
          },
          {
            "b": "左转"
          },
          {
            "c": "进入私人车道时"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 41,
        "question": "路沿如漆成红色，意思是停下或停车",
        "choices": [
          {
            "c": "仅限紧急车辆"
          },
          {
            "b": "仅有残疾人车辆是允许的"
          },
          {
            "a": "是不允许的，但巴士除外，这时会有路标"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 42,
        "question": "您在什么时候可以只亮着停车灯开车",
        "choices": [
          {
            "a": "日落后30分钟或日出前30分钟"
          },
          {
            "b": "任何情况下都不可以"
          },
          {
            "c": "在低能见度的有雾日子"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 43,
        "question": "什么叫安全地段",
        "choices": [
          {
            "b": "高速公路分隔物旁边的空车道"
          },
          {
            "a": "专留给行人的空间"
          },
          {
            "c": "在分隔式公路上的中央地带"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 44,
        "question": "黄色的路缘表示",
        "choices": [
          {
            "a": "只可以装卸物品或上下乘客"
          },
          {
            "c": "仅允许商业车辆"
          },
          {
            "b": "有限泊车，但是公共汽车可以用"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 45,
        "question": "如果在开车时发现没有办法促使自己保持清醒，您应该",
        "choices": [
          {
            "a": "喝咖啡"
          },
          {
            "b": "调高收音机音量"
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
        "question": "右转时，开始于右手车道，结束于：",
        "choices": [
          {
            "a": "离路缘最近的车道"
          },
          {
            "b": "任何可行驶的车道"
          },
          {
            "c": "左车道"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 47,
        "question": "在以下情况下，您应当扩大您的汽车与前面的车辆之间的距离",
        "choices": [
          {
            "b": "后面的车盯得很紧而拥挤"
          },
          {
            "c": "行车速度低于公布的限速"
          },
          {
            "a": "跟随小轿车"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 48,
        "question": "您刚被判决犯有在酒精影响下驾车，法官判您监禁48小时，此外，您可能：",
        "choices": [
          {
            "a": "要付罚款"
          },
          {
            "b": "失去驾驶执照长达18个月"
          },
          {
            "c": "车辆被扣留60天"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 49,
        "question": "骑自行车者必须",
        "choices": [
          {
            "b": "与车流同向而行"
          },
          {
            "a": "与车流相向而行"
          },
          {
            "c": "若无自行车道则在人行道上骑"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 50,
        "question": "如果在铁路旁停下，您可在下列情况穿过铁路",
        "choices": [
          {
            "c": "只有在火车完全消失时"
          },
          {
            "b": "火车通过您的道路后即可"
          },
          {
            "a": "只有在您能够看清两侧方向时"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 51,
        "question": "交通灯是红色的，但是治安官叫您往前开，您该怎么办",
        "choices": [
          {
            "a": "变换车道，缓慢行驶"
          },
          {
            "b": "照治安官说的做"
          },
          {
            "c": "等候绿灯"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 52,
        "question": "这标志表示",
        "choices": [
          {
            "b": "前方有侧路"
          },
          {
            "c": "您有先行权"
          },
          {
            "a": "另一条车道正在汇入您车道"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_103.png"
      },
      {
        "no": 53,
        "question": "一个黄色菱形信号显示一个左转箭头。这一信号的意思是",
        "choices": [
          {
            "c": "只能在出现绿色箭头时左转"
          },
          {
            "b": "您不能左转"
          },
          {
            "a": "道路左转"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_102.png"
      },
      {
        "no": 54,
        "question": "您绝不可将车泊在",
        "choices": [
          {
            "a": "标有交叉斜线的空间"
          },
          {
            "c": "自行车车道"
          },
          {
            "b": "离铁轨二十英尺远"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 55,
        "question": "如果没有限制线，应当将车停在那里？",
        "choices": [
          {
            "c": "过人行道后"
          },
          {
            "a": "刚过转弯处"
          },
          {
            "b": "在转弯处"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 56,
        "question": "您可以驶过路上标出的双线来超越另一辆车，如果在您路这边的线是",
        "choices": [
          {
            "b": "实线"
          },
          {
            "c": "黄线双实线"
          },
          {
            "a": "虚线"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 57,
        "question": " 当您没有看见四周有车时，为什么还需要发出讯号",
        "choices": [
          {
            "c": "您只需在换车道时才发出讯"
          },
          {
            "a": "一辆您没有看见的车可能会撞上您"
          },
          {
            "b": "如果路上没有别人，您就不必发出讯号"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 58,
        "question": "\"不要行走\"信号闪亮后，一名行人开始过街，这名行人在街中间时，您行车方向的交通信号灯变成绿色，您应该",
        "choices": [
          {
            "b": "如果行人不在您的车道上，继续驾车"
          },
          {
            "a": "继续驾车，但经过行人时应多加小心"
          },
          {
            "c": "等待，直至行人越过街道"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 59,
        "question": "您打算在一条私人车道上左转。您打算转入的道路在街道中间有一条车道。该车道外沿有一条实线，内沿…一条虚线。您",
        "choices": [
          {
            "b": "必须使用该车道，然后并入正常车流"
          },
          {
            "a": "可转入该车道，然后并入正常车流"
          },
          {
            "c": "在左转时不得转入该车道"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_101.png"
      },
      {
        "no": 60,
        "question": "在街角的行人有先行权",
        "choices": [
          {
            "a": "仅当街上划有人行横道"
          },
          {
            "b": "只限在有管制的交叉路口"
          },
          {
            "c": "不论是否标明人行横道"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 61,
        "question": "您可以驶过路上标出的双线来超越另一辆车，如果在您路这边的是",
        "choices": [
          {
            "c": "黄色双实线"
          },
          {
            "b": "实线"
          },
          {
            "a": "虚线"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 62,
        "question": "您在一个交叉路口停车，看望横向街道的视线被建筑物、灌木丛或路旁停车挡住，您应该",
        "choices": [
          {
            "b": "开始驶过，但做好在其它车辆出现时立即停车的准备"
          },
          {
            "a": "看见横向交通也有\"停\"的交通标志，再开始驶过"
          },
          {
            "c": "通过交叉路口前，缓慢驾车，直至看清交通状况"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 63,
        "question": "您什么时候可以绕过铁路平交道安全栅栏",
        "choices": [
          {
            "a": "任何情况下都不可以"
          },
          {
            "b": "在您能够清楚看到两边方向时"
          },
          {
            "c": "安全棚栏好像功能不正常时"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 64,
        "question": "您刚撞上了您前面那辆车的尾部，您可能是",
        "choices": [
          {
            "b": "在车流中穿梭进出"
          },
          {
            "a": "跟得太近了"
          },
          {
            "c": "太频繁地看后视镜"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 65,
        "question": "您把车停下。您打算左转，但是附近有对面来车。您应当",
        "choices": [
          {
            "c": "转弯，因为您有优先权"
          },
          {
            "b": "让路给对面车辆"
          },
          {
            "a": "如果附近没有行人则立即转弯"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 66,
        "question": "以下哪种作法最有助于改善交通流畅",
        "choices": [
          {
            "c": "取消缓冲空间"
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
        "question": "您何时应放弃您的法定优先权",
        "choices": [
          {
            "b": "有助于预防事故"
          },
          {
            "c": "永远不，这将使其他驾车人感到困惑"
          },
          {
            "a": "您要避免其他驾驶人的无故挑衅"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 68,
        "question": "大卡车行驶时，很多时候与前面的车辆保持较大的空间。这额外的空间是为",
        "choices": [
          {
            "b": "卡车驾驶人用于停车"
          },
          {
            "a": "其它车辆并入下坡道时使用"
          },
          {
            "c": "其它驾驶人准备减速时使用"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 69,
        "question": "驾驶者手册建议在高速公路上变换车道至少要提前___秒钟发出讯号",
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
        "question": "以下哪个是发现驾车危险的好方法",
        "choices": [
          {
            "a": "集中注意您车内的反光镜"
          },
          {
            "c": "扫视您车辆的前方"
          },
          {
            "b": "集中注意您前面的车辆"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 71,
        "question": "这个标志表明",
        "choices": [
          {
            "c": "开慢车的人有先行权"
          },
          {
            "b": "在任何时候都在右车道开"
          },
          {
            "a": "如果您比其他人驾驶得慢，就请一直在右车道开"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_49.png"
      },
      {
        "no": 72,
        "question": "这个标志表示",
        "choices": [
          {
            "c": "时速较慢车流应移至右道"
          },
          {
            "a": "靠右行车"
          },
          {
            "b": "换到右车道"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_46.png"
      },
      {
        "no": 73,
        "question": "当交通讯号灯出故障时，您应该",
        "choices": [
          {
            "a": "停车，然后安全时继续行驶"
          },
          {
            "b": "减速，如有必要就停车"
          },
          {
            "c": "如果有其他车辆在场才停车"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 74,
        "question": "转弯前最后_____英尺要发出讯号",
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
        "question": "以下有关盲点的说法哪一个是正确的",
        "choices": [
          {
            "b": "装有两个外面的反光镜的车辆没有盲点"
          },
          {
            "c": "在换到右车道时从右肩向后看，在换到左车道时从左肩向后看"
          },
          {
            "a": "您只在换到左边或右边的车道时才需要转过头 来从您右肩向后看"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 76,
        "question": "自卫性驾车是",
        "choices": [
          {
            "a": "仅看您前面的车辆"
          },
          {
            "b": "在您与您前面的车之间保持距离"
          },
          {
            "c": "保持移动您的目光，寻找可能的意外"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 77,
        "question": "闪亮煞车灯，或打开紧急闪光灯，如果您",
        "choices": [
          {
            "c": "正在停车场倒车"
          },
          {
            "a": "需要警告其他驾驶人前方有车祸"
          },
          {
            "b": "驾车时速比车流慢得多"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 78,
        "question": "您刚刚与路缘平行地将车泊好。车轮必须离路缘_____英寸之内",
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
        "question": "在单向街道上左转进入单向街道时，使用",
        "choices": [
          {
            "c": "中央左转车道"
          },
          {
            "a": "只要安全可使用任何车道"
          },
          {
            "b": "最靠近左边路缘的车道"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 80,
        "question": "住宅区内，一辆车正从对面向您开来。两辆车同时要经过一辆停在路边的车。您应该驶向",
        "choices": [
          {
            "b": "更靠近停在路边的车，而不是靠近对面来车"
          },
          {
            "c": "停在路边的车和对面来车中间"
          },
          {
            "a": "更靠近对面来车，而不是靠近停在路边的车"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 81,
        "question": "观察后面交通的最重要时间有三个，它们分别是在您进行下列哪三个动作之前",
        "choices": [
          {
            "b": "倒车、换车道和快速减速"
          },
          {
            "c": "换车道、穿越交叉路口和快速减速"
          },
          {
            "a": "倒车、急转弯和穿越交叉路口"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 82,
        "question": "出现浓雾或沙尘时最好怎么办",
        "choices": [
          {
            "b": "不要开得太慢，因为其他司机可能会撞上您"
          },
          {
            "a": "在情况改善前不要开车"
          },
          {
            "c": "轮流打开远光灯和近光灯，以提升能见度"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 83,
        "question": "您在车中载有打开盖子的酒精容器时驾车是否合法?",
        "choices": [
          {
            "b": "是，如果该容器在车后箱内"
          },
          {
            "a": "是，一律不合法"
          },
          {
            "c": "是，如果该容器在车后座"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 84,
        "question": "十字路口上有一个停车标志，您应该先在何处停车",
        "choices": [
          {
            "c": "在人行横道"
          },
          {
            "b": "驶到您能够看见横向交通为止"
          },
          {
            "a": "过了人行横道"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 85,
        "question": "基本速度法例是什么",
        "choices": [
          {
            "c": "路上交通车流的速度"
          },
          {
            "b": "绝对不能开得比标明的限速更快"
          },
          {
            "a": "绝对不能以超出当时情况所许可的安全速度驾车"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 86,
        "question": "前方的校车停下，校车的红灯闪亮，您必须",
        "choices": [
          {
            "b": "停车，直至校车的红灯停止闪亮"
          },
          {
            "a": "停车，直至认为全部学生已经下车"
          },
          {
            "c": "转换车道，缓慢驾车并小心经过"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 87,
        "question": "你何时穿越黄色双实线去超过另一辆车",
        "choices": [
          {
            "c": "当您知道无车向您驶来"
          },
          {
            "b": "任何情况下都不可"
          },
          {
            "a": "当一辆慢车拒绝使用让车道"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 88,
        "question": "您在一条左转车道之上看到一个信号说，\"左转在绿灯亮时让行\"，这信号的是什么意思",
        "choices": [
          {
            "a": "您只能在绿灯亮时左转"
          },
          {
            "c": "您必须等到信号灯全绿时左转"
          },
          {
            "b": "您可在绿灯亮起并且安全时左转"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_52.png"
      },
      {
        "no": 89,
        "question": "为什么您的乘客应该系安全带",
        "choices": [
          {
            "c": "不要求乘客系安全带"
          },
          {
            "b": "这是法律规定"
          },
          {
            "a": "它能帮助防止车祸"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 90,
        "question": "除非另有标志说明，在住宅区限速是多少",
        "choices": [
          {
            "a": "每小时35哩"
          },
          {
            "b": "每小时25哩"
          },
          {
            "c": "每小时30哩"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 91,
        "question": "您在有分隔带的街道上开车，但您的方向有几条车道。如果您需要掉头，您应当从那条车道开始掉头？",
        "choices": [
          {
            "c": "左车道"
          },
          {
            "b": "任何车道"
          },
          {
            "a": "中间车道"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 92,
        "question": "这个标志表示",
        "choices": [
          {
            "a": "右边车道将要终止"
          },
          {
            "c": "前方有限制区"
          },
          {
            "b": "前方有休息区"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_97.png"
      },
      {
        "no": 93,
        "question": "下列有关摩托车那一种说法是正确的",
        "choices": [
          {
            "c": "应当扩大跟随摩托车的距离"
          },
          {
            "b": "摩托车不得共用车道"
          },
          {
            "a": "摩托车比较小，开车人很容易看到"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 94,
        "question": "您正在接近交通信号灯正在闪动的红灯的交叉路口。您应当怎么办？",
        "choices": [
          {
            "c": "先在交叉路口前停下，直至等到绿灯亮起再继续行驶"
          },
          {
            "a": "除非有看到其他车辆，否则在进入交叉路口时可继续行驶"
          },
          {
            "b": "在进入交叉路口之前停下，安全时再继续行驶"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 95,
        "question": "在“上下班高峰时间＂阻塞十字路口的交通是",
        "choices": [
          {
            "a": "不允许的，除非您有先行权"
          },
          {
            "c": "在任何情况下均不允许"
          },
          {
            "b": "不允许的，除非横向行驶的部份车辆能绕过您"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 96,
        "question": "您如果卖车，则必须在5日以内通知",
        "choices": [
          {
            "a": "您的保险公司"
          },
          {
            "b": "您的银行或信用卡联盟"
          },
          {
            "c": "车辆管理局(DMV)"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 97,
        "question": "您撞了一辆泊着的车，您找不到车主，您必须怎么办",
        "choices": [
          {
            "b": "回家后打电话给您的保险公司"
          },
          {
            "a": "在那辆车上留一字条"
          },
          {
            "c": "等车主回来"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 98,
        "question": "您绝不可将车泊在",
        "choices": [
          {
            "b": "离铁轨二十英尺远"
          },
          {
            "c": "自行车车道"
          },
          {
            "a": "标有交叉斜线的空间 ."
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 99,
        "question": "您与您左边的驾驶者同时到达交叉路口，谁该先走",
        "choices": [
          {
            "a": "您先走"
          },
          {
            "c": "谁发出转弯讯号谁先走"
          },
          {
            "b": "您左边的驾驶者先走"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 100,
        "question": "如果您的车子开始在水面飘滑，您应当",
        "choices": [
          {
            "c": "逐渐减速，不要踩刹车"
          },
          {
            "b": "用力踩刹车，以防止您的车子打滑"
          },
          {
            "a": "保持一定车速，以便获得更好的牵引力"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 101,
        "question": "您正在接近交叉路口。信号灯是闪动的黄灯。您应",
        "choices": [
          {
            "c": "减速并小心通过"
          },
          {
            "b": "在通过交叉路口前停下"
          },
          {
            "a": "保持速度，但是当心其他车辆"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 102,
        "question": " 以下有关安全带的说法哪个是正确的",
        "choices": [
          {
            "c": "年满一岁且体重超过二十磅的小孩应该系上安全带乘坐前座"
          },
          {
            "b": "在装有乘客座位安全充气袋的车里，婴儿不应该乘坐前座"
          },
          {
            "a": "对12岁或以下的小孩而言，通常后座不是车中最安全的座位"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 103,
        "question": "准备开车时应当小心向前方观察10到15秒",
        "choices": [
          {
            "c": "以及早发现隐患"
          },
          {
            "b": "因为这是法律规定"
          },
          {
            "a": "以避免使用侧视镜"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 104,
        "question": "您在一条四车道高速公的车道上开车。如果要从最右边下高速公路，您应",
        "choices": [
          {
            "c": "在开始每次改换车道之前减速"
          },
          {
            "a": "观察右边所有车道并小心地一次穿过所有车道"
          },
          {
            "b": "每次改换一条车道，直到您进入正确的车道"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 105,
        "question": "加州驾驶手册上列出两种阻塞交通的主要驾驶行为是",
        "choices": [
          {
            "c": "无经验驾驶和驾驶时漫不经心"
          },
          {
            "b": "追尾和并道"
          },
          {
            "a": "驾驶时东张西望和不必要地更换车道"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 106,
        "question": "如果后方的车跟得太近，您应该",
        "choices": [
          {
            "c": "示意后方紧跟的车超您的车"
          },
          {
            "a": "突然刹车，警告后方车跟太紧"
          },
          {
            "b": "小心增加您的车前方的空间"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 107,
        "question": "如果您的车将从后方遭到撞击，您应当",
        "choices": [
          {
            "b": "踩住刹车不放"
          },
          {
            "a": "准备好在撞车后刹车"
          },
          {
            "c": "挂上空档，关掉发动机"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 108,
        "question": "您必须在机动车辆使用的车道上当心骑自行车者，因为他们",
        "choices": [
          {
            "b": "有权与您共用道路"
          },
          {
            "c": "有先行权"
          },
          {
            "a": "必须朝迎面开来的车辆骑"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 109,
        "question": "您在沿路沿向下坡停车时，应当将车轮转到那个方向",
        "choices": [
          {
            "c": "与路沿平行"
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
        "question": "这标志表示",
        "choices": [
          {
            "b": "您不能从您这个方向进入道路"
          },
          {
            "c": "只有安全时才可进入"
          },
          {
            "a": "前方道路对任何方向的车辆都关闭"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_39.png"
      },
      {
        "no": 111,
        "question": "您在停车时，以下哪一情况是要将前车轮转向路沿",
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
        "question": "黄线是用于分离开",
        "choices": [
          {
            "c": "常规车道和共乘车道"
          },
          {
            "a": "单向公路的各条车道"
          },
          {
            "b": "双向公路的正反两个方向"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 113,
        "question": "通常，您知道您处在一辆卡车的盲点内，如果",
        "choices": [
          {
            "b": "您在它后面六英尺以外"
          },
          {
            "c": "您一直靠近该车辆的右前轮"
          },
          {
            "a": "您看不见该车辆的反光镜"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 114,
        "question": "除非另有标明，在有小孩的学校地段的限速为",
        "choices": [
          {
            "a": "时速15英哩"
          },
          {
            "c": "时速25英哩"
          },
          {
            "b": "时速20英哩"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 115,
        "question": "有关大型卡车的以下说法哪一个是正确的",
        "choices": [
          {
            "a": "大卡车需要较长时间才能完全停下"
          },
          {
            "c": "大卡车比客车更容易操纵"
          },
          {
            "b": "所有大卡车都有气动刹车，因此能够迅速停下"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 116,
        "question": "下列哪种情况，在察看了行人和其他车辆之后，您可以在红灯时右转",
        "choices": [
          {
            "c": "只要您先减速，任何时候都可以"
          },
          {
            "b": "仅在有标志表明这样做是可以时"
          },
          {
            "a": "在您停车之后，并且没有任何禁止该转弯的标志"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 117,
        "question": "两排双黄色实线距离两英尺或更宽",
        "choices": [
          {
            "a": "只有在进入私人车道时才能够穿过"
          },
          {
            "b": "应当看成是实心的墙壁，而不得穿过"
          },
          {
            "c": "意思是这是开始或结束左转的车道"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 118,
        "question": " 您正驶近绿灯，但有车流挡住了交叉路口。您最好应该",
        "choices": [
          {
            "b": "如果不能通过交叉路口，不要驶进"
          },
          {
            "c": "继续驶进交叉路口，并等候过往车流净空"
          },
          {
            "a": "将车部份驶进交叉路口，以便确立您的优先权"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 119,
        "question": "漆成白色的路缘表示",
        "choices": [
          {
            "c": "您可以让乘客上下车"
          },
          {
            "b": "公共汽车可以用这区边上客"
          },
          {
            "a": "您可以装卸物品"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 120,
        "question": "在交叉路口左转弯，您应该",
        "choices": [
          {
            "b": "转弯前，观察交叉路口两个方向的车流"
          },
          {
            "a": "转弯前，永远将车完全停住"
          },
          {
            "c": "将车开到交叉路口中间，然后缓慢并入车流"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 121,
        "question": "您通常应当在下列情况减速",
        "choices": [
          {
            "a": "如果看到前方相隔几辆车的刹车灯亮起"
          },
          {
            "c": "经过受管制的车祸现场"
          },
          {
            "b": "在高速公路上准备或正在超越大卡车"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 122,
        "question": "一个黄色菱形信号显示箭头绕过一个障碍物。这信号的意思是",
        "choices": [
          {
            "a": "前方道路可能比较滑"
          },
          {
            "b": "前方的公路有分隔带"
          },
          {
            "c": "前方道路有障碍物"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_3.png"
      },
      {
        "no": 123,
        "question": "安全倒车包括下列所有各项，只有一个例外",
        "choices": [
          {
            "b": "在上车之前查看车辆的后面"
          },
          {
            "a": "倒车时向右边回头看"
          },
          {
            "c": "倒车之前轻按喇叭"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 124,
        "question": "您何时可为了右转而汇入自行车道",
        "choices": [
          {
            "a": "转弯前不超过200英尺"
          },
          {
            "b": "在任何情况下都不可以"
          },
          {
            "c": "转弯前不超过100英尺"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 125,
        "question": "您应该在夜间使用远光灯/高灯",
        "choices": [
          {
            "c": "只要合法安全即可使用"
          },
          {
            "a": "尽量少用"
          },
          {
            "b": "只在没有照明或较昏暗的街道上使用"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 126,
        "question": "您正在驶近一个十字路口，驾驶者手册建议你",
        "choices": [
          {
            "b": "向左看，向右看，向左看，在驶出前再看一下右边"
          },
          {
            "a": "向左看，向右看，在驶出前再看一下左边"
          },
          {
            "c": "向正前方看，在驶出前再看一下左边"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 127,
        "question": "这个标志表示",
        "choices": [
          {
            "a": "如果有其他车辆在场就停车"
          },
          {
            "c": "在限制线两英尺前停车"
          },
          {
            "b": "每次都要停车"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_36.png"
      },
      {
        "no": 128,
        "question": "一辆大卡车在一条三车道公路的中间车道行驶。您打算超越大卡车。最好的超车方法是：",
        "choices": [
          {
            "a": "从左边很快超连，然后开到大卡车前方"
          },
          {
            "c": "从右边很快超车，然后开到大卡车前方"
          },
          {
            "b": "很慢地从左边超车，然后开到大卡车前方"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 129,
        "question": "超越另一辆车后，以下那种状况时才能安全返回原车道",
        "choices": [
          {
            "b": "您转过头，看见后面有车"
          },
          {
            "c": "可以从后视镜看见被超越车辆的两个前车灯"
          },
          {
            "a": "被超越车辆驾驶人给您发出信号，提示您转回原车道"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 130,
        "question": "您可以驶离路面超越另一辆车",
        "choices": [
          {
            "b": "如果您行车方向有两条或更多条车道"
          },
          {
            "a": "如果前方车辆正左拐弯"
          },
          {
            "c": "任何状况下都不可以"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 131,
        "question": "安全带何时没有效果",
        "choices": [
          {
            "b": "时速超过40英里时"
          },
          {
            "a": "低速时"
          },
          {
            "c": "安全带永远是有效的"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 132,
        "question": "在转弯之前务必小心注意摩托车，因为",
        "choices": [
          {
            "b": "摩托车在交叉路口总是拥有优先权"
          },
          {
            "a": "摩托车必须占用一整条车道"
          },
          {
            "c": "摩托车比较小，因此不太容易看到"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 133,
        "question": "这标志表示",
        "choices": [
          {
            "b": "另一条车道正在汇入您的车道"
          },
          {
            "c": "前方有分隔式公路"
          },
          {
            "a": "右车道将要终止"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_1.png"
      },
      {
        "no": 134,
        "question": "您在倒车时应当",
        "choices": [
          {
            "c": "依赖侧视镜和后视镜"
          },
          {
            "a": "依赖后视镜"
          },
          {
            "b": "从后车窗向外看"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 135,
        "question": "这个标志表示",
        "choices": [
          {
            "c": "前方右面有侧路"
          },
          {
            "a": "另一条路与您的路相交"
          },
          {
            "b": "另一条车道正在汇入您的车道"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_14.png"
      },
      {
        "no": 136,
        "question": "以下哪种做法能帮助您避免被人从后面撞上",
        "choices": [
          {
            "a": "在任何时候都打开泊车灯"
          },
          {
            "b": "在转弯前至少100英尺就发出讯号"
          },
          {
            "c": "在转弯前至少200英尺就使用您的紧急闪光灯"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 137,
        "question": "在开车时若往车前方观看，您应该",
        "choices": [
          {
            "c": "来回远近都要观看"
          },
          {
            "b": "只需要看前那辆车"
          },
          {
            "a": "随时保持直视"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 138,
        "question": "这标志表示",
        "choices": [
          {
            "b": "您不能左转"
          },
          {
            "c": "您不能进入侧路"
          },
          {
            "a": "您不能做U形回转"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_42.png"
      },
      {
        "no": 139,
        "question": "下列那一种换线方法是正确的",
        "choices": [
          {
            "b": "打信号，回头查看，然后换线"
          },
          {
            "c": "换线前打信号，然后迅速换线"
          },
          {
            "a": "打信号，查看镜子，然后换线"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 140,
        "question": "您在公布限速为每小时65哩的高速公路最左车道上以每小时55哩速度驾驶。在下列情况下，您可能会因为车开得太慢而收到罚单",
        "choices": [
          {
            "c": "绝不可能，因为开车比其他人更慢总是更加安全"
          },
          {
            "b": "如果您阻挡正常和合理的车流"
          },
          {
            "a": "如果道路或气象状况要求您开得这么慢"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 141,
        "question": "您想汇入高速公路车流，您的驾驶速度应该是",
        "choices": [
          {
            "a": "法定高速公路的限速"
          },
          {
            "b": "与高速公路车流相同的速度"
          },
          {
            "c": "比高速公路车流的速度每小时慢10英里"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 142,
        "question": "转弯或转线时，您应该持续打信号灯，因为",
        "choices": [
          {
            "a": "完成转弯或转线动作前，关闭信号灯是违法的"
          },
          {
            "b": "让其他驾驶人知道您准备转弯或转线"
          },
          {
            "c": "完成转弯或转线动作之前关闭信号灯是危险的"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 143,
        "question": "以下有关其他司机的那一种说法是正确的？",
        "choices": [
          {
            "c": "在任何情况下，绝不能假设其他司机会给您让路"
          },
          {
            "a": "驾驶卡车的司机是专业人员，他们会特别小心，造成的风险较小"
          },
          {
            "b": "发出转弯信号的司机总是要向所表示的转弯信号方向转弯"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 144,
        "question": "在一条狭窄的双车道路上跟在您后面有五辆或更多的车辆，您应该",
        "choices": [
          {
            "c": "在安全时驶离路面，让他们超过您"
          },
          {
            "a": "当他们试图超过您时就加速"
          },
          {
            "b": "继续驾驶，不要理他们"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 145,
        "question": "您在处于绿色箭头管制的转弯车道中。以下那一项是正确的？",
        "choices": [
          {
            "a": "任何路口的所有车辆和行人都必须让路给您转弯"
          },
          {
            "b": "对面所有来车和行人被红灯拦住"
          },
          {
            "c": "您可以不查看交通情况就顺着箭头方向转弯"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 146,
        "question": "前方有铁路交叉路口，您看见有红灯在闪烁，警告您有火车驶 来，您必须",
        "choices": [
          {
            "a": "停车，然后安全时再前行"
          },
          {
            "b": "慢下来，然后再过去"
          },
          {
            "c": "仅在您看见有火车驶来时才停车"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 147,
        "question": "您在一条两车道上行驶。您在左车道行驶，有许多辆车从右边超车。您应当",
        "choices": [
          {
            "c": "在安全时改换到右车道"
          },
          {
            "b": "停在左边路肩上让他们超连"
          },
          {
            "a": "继续在自己的车道行驶，以使不阻挡车流"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 148,
        "question": "这一车道用于",
        "choices": [
          {
            "a": "在交通允许下开始或终止左转"
          },
          {
            "c": "在交通允许下右转"
          },
          {
            "b": "在交通允许下超过其他车辆"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_104.png"
      },
      {
        "no": 149,
        "question": "行车速度低于车流可能会",
        "choices": [
          {
            "b": "增加发生车祸的可能性"
          },
          {
            "c": "对发生车祸的可能性没有影响"
          },
          {
            "a": "减少发生车祸的可能性"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 150,
        "question": "冰冻天气里，在下雪或下雨之后，哪一种地方最容易打滑",
        "choices": [
          {
            "c": "柏油路面而不是水泥路面"
          },
          {
            "b": "背阴地带的路面"
          },
          {
            "a": "山顶"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 151,
        "question": "有关死角的以下那一种说法是正确的",
        "choices": [
          {
            "a": "无论换左线还是右线都只需要向右边回头看"
          },
          {
            "b": "换左线时向左边回头看，换右线时向右边回头看"
          },
          {
            "c": "车外配备两面镜子的车辆是没有死角的"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 152,
        "question": "在下列情况下，小卡车后面可以有合法乘客",
        "choices": [
          {
            "a": "小卡车侧板至少有24英寸高"
          },
          {
            "b": "小卡车平板上有一个车座用螺丝钉在车身上"
          },
          {
            "c": "小卡车后面配备了安全带"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 153,
        "question": "察看您后面的车流",
        "choices": [
          {
            "b": "将帮助您知道是否有人尾随您太紧"
          },
          {
            "c": "不是个好主意。您应该注意您前面的车流"
          },
          {
            "a": "只在您减速时才有用"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 154,
        "question": "如没有特别说明或标示，商业区一般限速是多少？",
        "choices": [
          {
            "a": "每小时25哩"
          },
          {
            "c": "每小时35哩"
          },
          {
            "b": "每小时20哩"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 155,
        "question": "交通信号灯的红箭头指向右边，表示您可以",
        "choices": [
          {
            "a": "减速和观察车流后拐向右边"
          },
          {
            "c": "完全停车后，再拐向右边"
          },
          {
            "b": "先等红箭头变成绿色后拐向右边"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 156,
        "question": "您在公路上行驶，突然您的轮胎泄了气，您需要停下车求人帮 忙，您应在何处将车停下",
        "choices": [
          {
            "a": "在右手车道"
          },
          {
            "b": "离开路面"
          },
          {
            "c": "在任何离您车前部200英尺远的别人能看见您车子的地方"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 157,
        "question": "以下有关修路工人的说法哪一个是不正确的",
        "choices": [
          {
            "b": "白色标志告诉您已关闭的道路，前方正在修路"
          },
          {
            "c": "在建筑地段的某些违规将加倍罚款"
          },
          {
            "a": "修路设备是漆成橘黄色的"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 158,
        "question": "以下有关轻型有轨车辆的说法哪一个是正确的",
        "choices": [
          {
            "b": "轻型有轨车辆可以先占交通讯号"
          },
          {
            "a": "在公共道路上，轻型有轨车辆的责任与其他车辆不同"
          },
          {
            "c": "您必须总是从右边超过轻型有轨车辆"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 159,
        "question": "如果您不幸卷入车祸，除了向对方出示您的驾照，您还必须提供什么资料给对方？",
        "choices": [
          {
            "a": "只要出示您的经济责任证明"
          },
          {
            "c": "您的经济责任，车辆登记证明和目前居住地址"
          },
          {
            "b": "您的经济责任和车辆登记证明"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 160,
        "question": "如果您发生车祸，车祸中出现人员伤亡或造成500元以上的损 失，您必须通知执法部门，并写一份书面报告给",
        "choices": [
          {
            "b": "加州高速公路巡罗队"
          },
          {
            "a": "您的保险公司"
          },
          {
            "c": "车辆管理局(DMV)"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 161,
        "question": "漆成篮色的路沿表示",
        "choices": [
          {
            "c": "车上挂有残疾人标识牌的人可以停车"
          },
          {
            "a": "如果您在车内等候，可以暂时停车"
          },
          {
            "b": "车上未挂残疾标识牌的残疾人可以停车"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 162,
        "question": "黄色双实线的意思是",
        "choices": [
          {
            "c": "您可以赶上和超过另一辆车"
          },
          {
            "a": "无论怎样您也不可以横穿该线"
          },
          {
            "b": "您可以进入私人车道"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 163,
        "question": "21岁或以上人士开车时血液酒精浓度达到多少或超过为非法。",
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
        "question": "漆成绿色的路缘表示",
        "choices": [
          {
            "a": "只可在限定的时间内停车或泊车"
          },
          {
            "b": "乘客上下车地段"
          },
          {
            "c": "仅限救急车辆泊车"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 165,
        "question": "在同一条机动车道上，您必须注意观察骑脚车的人。因为他们",
        "choices": [
          {
            "a": "骑车时必须面对迎面来车"
          },
          {
            "c": "有权与您共享车道"
          },
          {
            "b": "通常有优先权"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 166,
        "question": "您在红色交通信号灯前等候右转，您的车辆右侧有一位行人等候穿越马路，信号灯变绿时，谁有优先权",
        "choices": [
          {
            "b": "您只有在人行道没有标志时有优先权"
          },
          {
            "a": "行人有优先权"
          },
          {
            "c": "您有优先权，因为您的信号灯是绿色"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 167,
        "question": "这种形状的桔黄色标志表示",
        "choices": [
          {
            "b": "行驶缓慢的机动车"
          },
          {
            "a": "机动车有优先权"
          },
          {
            "c": "前方交通有危险状况"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_81.png"
      },
      {
        "no": 168,
        "question": "您是否应该比其他车辆开得较慢",
        "choices": [
          {
            "b": "是，开慢比开得太快要安全"
          },
          {
            "a": "否，您开得太慢会阻塞交通"
          },
          {
            "c": "是，这样可以使其他车辆也开得慢一点"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 169,
        "question": "在没有人行横道的十字路口，谁有先行权",
        "choices": [
          {
            "a": "车辆，但是应该慢下来"
          },
          {
            "b": "行人，但仅在有标明的人行横道上"
          },
          {
            "c": "永远是行人"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 170,
        "question": "盲点交叉路口的限速是",
        "choices": [
          {
            "a": "时速10英里"
          },
          {
            "b": "时速15英里"
          },
          {
            "c": "时速25英里"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 171,
        "question": "在高速公路上驾车时，应注视远方",
        "choices": [
          {
            "b": "因为您需1/4哩距离才能完全停车"
          },
          {
            "a": "以便及早发现危险状况"
          },
          {
            "c": "因为有助您跟上车流"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 172,
        "question": "您在车祸中使人受伤，谁应该填写事故报告",
        "choices": [
          {
            "c": "您的汽车俱乐部"
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
        "question": "在街角的行人有先行权",
        "choices": [
          {
            "b": "仅在有管制的交叉路口"
          },
          {
            "c": "不论是否标明人行横道"
          },
          {
            "a": "仅当街上划有人行横道"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 174,
        "question": "以下有关驾车和服用药物的说法哪一种是正确的",
        "choices": [
          {
            "a": "大多数治头痛或感冒的药能使人昏昏欲睡"
          },
          {
            "c": "处方药品在任何时候服用都是安全的"
          },
          {
            "b": "药物和酒精能同时使用"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 175,
        "question": "进入交叉路是非法的，如果",
        "choices": [
          {
            "b": "黄色信号灯在闪动，您没有首先停下"
          },
          {
            "c": "信号灯是黄色，您不能安全停下"
          },
          {
            "a": "在信号灯变成红色之前您来不及完全穿过"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 176,
        "question": "以下哪种情况过十字路口是违法",
        "choices": [
          {
            "a": "讯号灯是黄灯"
          },
          {
            "c": "黄灯在闪烁，您没有先停下"
          },
          {
            "b": "在灯变红之前您无法完全穿过街道"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 177,
        "question": "这个信号表示",
        "choices": [
          {
            "a": "除非看见对面没有来车,否则不要超越"
          },
          {
            "c": "不能因任何理由超越其它车辆"
          },
          {
            "b": "除非超车时不会发生危险，否则不要超越"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_44.png"
      },
      {
        "no": 178,
        "question": "如果在没有信号管制的交叉路口，您在进入交叉路口之前没有看到车辆穿过，则限速是多少",
        "choices": [
          {
            "b": "每小时15哩"
          },
          {
            "c": "每小时10哩"
          },
          {
            "a": "每小时25哩"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 179,
        "question": "当您离开您的车道去超另一辆车时，以下何时您可以知道您有足够的空间回到原来的行车道",
        "choices": [
          {
            "c": "当您在另外那辆车前面的两秒钟后"
          },
          {
            "a": "当您超过了另外那辆车的前保险杠"
          },
          {
            "b": "当您从后视镜中看见了该车的前部"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 180,
        "question": "下列哪个驾驶时速是正确的",
        "choices": [
          {
            "a": "加州法律没有最低时速限制"
          },
          {
            "b": "时速越快，控制车的能力越低"
          },
          {
            "c": "当您以两倍的时速行驶时(通常驾车时速的两倍)，您也需要两倍的停车空间"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 181,
        "question": "以下有关滑溜路面的说法有哪一种是正确的",
        "choices": [
          {
            "c": "热天下雨的最初几分钟，路面并不滑溜"
          },
          {
            "a": "在寒冷潮湿的日子，建筑物或树木的阴影能隐藏 有冰的地方"
          },
          {
            "b": "桥梁和上跨通道最晚结冻"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 182,
        "question": "您可以驶离路面来超车",
        "choices": [
          {
            "b": "如果您前面的车辆正在左转"
          },
          {
            "c": "任何情况下都不可以"
          },
          {
            "a": "如果与您同方向的有两个或以上的车道"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": true,
        "signName": "sign_2.png"
      },
      {
        "no": 183,
        "question": "不带路沿的坡形街道有两条车道，如果要停车，您应该",
        "choices": [
          {
            "c": "将前车轮转向右，朝向路边"
          },
          {
            "b": "将车停得稍带一点角度，后车轮靠近路边"
          },
          {
            "a": "将车前轮转向左边，离开路边"
          }
        ],
        "correctAnswer": "c",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 184,
        "question": "道路上公布的限速是每小时55哩。如下雨或道路潮湿时，您应该",
        "choices": [
          {
            "a": "保持每小时55哩的速度"
          },
          {
            "b": "在限速以下5到10哩的速度行驶"
          },
          {
            "c": "在限速以下20到25哩的速度行驶"
          }
        ],
        "correctAnswer": "b",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 185,
        "question": "以下哪个是合法的U形回转",
        "choices": [
          {
            "c": "在消防站前面"
          },
          {
            "a": "在公路有转弯空地的地方"
          },
          {
            "b": "在路中转弯处前150英尺"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      },
      {
        "no": 186,
        "question": "下列有关双重泊车的说法哪一个是正确的",
        "choices": [
          {
            "a": "它在任何情况下都是违法的"
          },
          {
            "c": "它是违法的，除非您等在车中"
          },
          {
            "b": "如果您是在送货则是许可的"
          }
        ],
        "correctAnswer": "a",
        "userAnswer": "",
        "hasSign": false,
        "signName": ""
      }
    ];

    this.signDatasetTraditional = [
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
    this.signDatasetSimplified = [
      {
        "no": 1,
        "question": "以下哪个标志告诉您，此处是松土带（没有铺柏油）？",
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
        "question": "以下哪个标志告诉您，当绿色箭头亮起时，你可以做什么？",
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
        "question": "以下哪个标志告诉您，前面道路中间有分界道？",
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
        "question": "以下哪个标志告诉您，此处不准作U形转弯？",
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
        "question": "以下哪个标志告诉您，前面有左转弯？",
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
        "question": "以下哪个标志告诉您，此处不要作左或右转弯？",
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
        "question": "以下哪个标志告诉您，前面道路施工？",
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
        "question": "以下哪个标志告诉您，如果你正在右线道上行驶，你必须向右转弯？",
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
        "question": "以下哪个标志告诉您，前面道路关闭？",
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
        "question": "以下哪个标志告诉您，潮湿时路滑？",
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
        "question": "以下哪个标志告诉您，松软肩道？",
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
        "question": "以下哪个标志告诉您，车辆将从右方驶入此街道？",
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
        "question": "以下哪个标志告诉您，要留意学生在此横过街道？",
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
        "question": "以下哪个标志告诉您，要开始慢驶？",
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
        "question": "以下哪个标志告诉您，此处有沙石落下？",
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
        "question": "以下哪个标志告诉您，在右边线道上的车辆必须在出口处驶离公路？",
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
        "question": "以下哪个标志告诉您，前面有窄桥？",
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
        "question": "以下哪个标志告诉您，要绕道行驶？",
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
        "question": "以下哪个标志告诉您，慢行车辆应该怎样做？",
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
        "question": "以下哪个标志告诉您，前面有超车线道？",
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
        "question": "以下哪个标志告诉您，当红灯亮时，车辆不准作任何转变？",
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
        "question": "以下哪个标志告诉您，前面有十字路口？",
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
        "question": "以下哪个标志告诉您，车辆慢行，前面道路施工中？",
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
        "question": "以下哪个标志告诉您，要留意横过街道的行人？",
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
        "question": "以下哪个标志告诉您，要准备停车？",
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
        "question": "以下哪个标志告诉您，此处水淹？",
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
        "question": "以下哪个标志告诉您，前面有铁平交道？",
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
        "question": "以下哪个标志告诉您，在此处必须作右转弯？",
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
        "question": "以下哪个标志告诉您，前面必须停车？",
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
        "question": "以下哪个标志告诉您，前面有左转弯？",
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
        "question": "以下哪个标志告诉您，前面有交通讯号？",
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
        "question": "以下哪个标志告诉您，减速车辆必须使用避让区域？",
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
        "question": "以下哪个标志告诉您，前面道路有人施工？",
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
        "question": "以下哪个标志告诉您，有多少铁轨横跨前方道路？",
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
        "question": "以下哪个标志告诉您，此处不准作任何转弯？",
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
