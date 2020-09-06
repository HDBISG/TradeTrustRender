import { Document } from "@govtechsg/decentralized-renderer-react-components";

export interface CocTemplateCertificate extends Document {
  name: string;
  recipient: {
    name: string;
  };
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

export const cocTemplateCertificate: CocTemplateCertificate = {
  name: "OpenAttestation Tutorial Certificate of Completion",
  recipient: {
    name: "John Doe"
  },
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
      coRemark:"MANUFACTURER’S NAME AND ADDRESS        PANASONIC SYSTEM NETWORKS MALAYSIA SDN BHD        PLO NO.1 KAWASAN PERINDUSTRIAN SENAI, KB NO.104, 81400 SENAI, JOHOR, MALAYSIA        NOTIFY PARTY:        PANASONIC INDIA PVT.LTD. ( CHENNAI        WAREHOUSE), NO.282/2 ,(A2+B2+C2)        NO 5/240, TIRUVALLUR HIGH RODA,        ALAMADI, PONNERI TALUK , CHENNAI -        600052 , INDIA";
  },
  $template: {
    name: "COC",
    type: "EMBEDDED_RENDERER",
    url: "http://localhost:3000"
  }
};