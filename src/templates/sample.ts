import { v2 } from "@govtechsg/decentralized-renderer-react-components";

export interface CocTemplateCertificate extends v2.OpenAttestationDocument {
  data: {
    eco: {
        coDocno: string;
        coRefNo: string;
        coExptrName: string;
        coExptrAddr1: string;
        coExptrAddr2: string;
        coExptrAddr3: string;
        coExptrAddr4: string;
        coConsignName: string;
        coConsignAddr1: string;
        coConsignAddr2: string;
        coConsignAddr3: string;
        coConsignAddr4: string;
        coDepartureType: string;
        coDepartureDt: string;
        coVslFlt: string;
        coPortOfDisch: string;
        coFinaldestCtryCd: string;
        coOriginCtryDesc: string;
        coAppliedBy: string;
        coAppliedLocName: string;
        coAppliedDt: string;
        coRemark:string;
    }
  }
}

export const cocTemplateCertificate: CocTemplateCertificate = {

  issuers: [
    {
      name: "vCargo Cloud Pte Ltd"
    }
  ],
  data : {
    eco: {
        coDocno: "",
        coRefNo: "SICC - 88-20-002264",
        coExptrName: "PANASONIC LOGISTICS ASIA PACIFIC ON BEHALF OF PANASONIC CORPORATION",
        coExptrAddr1: "1006, KADOMA, KADOMA CITY, OSAKA, 571-8501, JAPAN",
        coExptrAddr2:"",
        coExptrAddr3: "",
        coExptrAddr4: "",
        coConsignName: "PANASONIC INDIA PVT.LTD.",
        coConsignAddr1: "6TH FLOOR SPIC BUILDING ANNEXE",
        coConsignAddr2: "NO.88, MOUNT ROAD, GUINDY CHENNAI",
        coConsignAddr3: "600032, INDIA",
        coConsignAddr4: "",
        coDepartureType: "ON OR ABOUT",
        coDepartureDt: "2020-01-29",
        coVslFlt: "NORTHERN_VIVACITY/1748-039S",
        coPortOfDisch: "CHENNAI VIA PORT KLANG",
        coFinaldestCtryCd: "INDIA",
        coOriginCtryDesc: "MALAYSIA",
        coAppliedBy: "SERENE NEO",
        coAppliedLocName: "TEAM LEADER",
        coAppliedDt: "2020-01-31",
        coRemark:"MANUFACTURER’S NAME AND ADDRESS ",
    },
  },
  $template: {
    name: "COC",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000"
  }
};