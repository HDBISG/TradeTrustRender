import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { CocTemplateCertificate } from "../sample";
import  TemplateItem  from "./templateItem";

const containerStyle = css`
  background-color: #324353;
  color: #ffffff;
  padding: 15px;
  margin: auto;
  width: 80%;
  text-align: center;
`;

const tableGroup = css`
  width: 100%; 
  border: 1px solid grey; 
  table-layout: fixed; 
  border-collapse: collapse;
`;

const td = css`
  border: 1px solid grey; 
  border-collapse: collapse;
  padding: 0px 6px;
`;
const leftAlignTd = css`
  border: 1px solid grey; 
  border-collapse: collapse;
  text-align: left;
  padding: 0px 6px;
`;

const td30Width = css`
  width:30%;
`;

export const CocTemplate: FunctionComponent<
  TemplateProps<CocTemplateCertificate> & { className?: string }
> = ({ document, className = "" }) => {
  return (
    <div css={containerStyle} className={className} id="custom-template">
<table css={tableGroup} >
    <tbody>

    <tr  >
    <td css={leftAlignTd}>
    <p><strong>1 Exporter (Name &amp; Address)</strong></p>
    <p> {document.data.eco.coExptrName}</p>
    <p> {document.data.eco.coExptrAddr1}</p>
    </td>
    <td  css={td} rowSpan={2}>
    <p><strong>REPUBLIC OF SINGAPORE</strong></p>
    <p>Trade Trust</p>
    <p><strong>CERTIFICATE OF ORIGIN</strong></p>
    <br/>
    <p><strong>No. {document.data.eco.coRefNo}</strong></p>
    <br/>
    <p>NO UNAUTHORISED ADDITION/ALTERATION MAY BE MADE</p>
    <p>TO THIS CERTIFICATE ONCE IT IS ISSUED</p>
    </td>
    </tr>

    <tr>
    <td  css={leftAlignTd} >
    <p><strong>2 Consignee (Name, Full Address &amp; Country)</strong></p>
    <p> {document.data.eco.coConsignName}</p>
    <p> {document.data.eco.coConsignAddr1} <br/>
        {document.data.eco.coConsignAddr2} <br/>
        {document.data.eco.coConsignAddr3} <br/>
        {document.data.eco.coConsignAddr4}</p>    
    </td>
    </tr>

    <tr>
    <td css={leftAlignTd} >
    <p><span><strong >3 Departure Date</strong> 	</span>
      <span style={{float:'right'}}>{document.data.eco.coDepartureType}  &nbsp;&nbsp;&nbsp;&nbsp; 
        {document.data.eco.coDepartureDt} </span> </p>
    </td>
    <td  css={leftAlignTd} rowSpan={5}>
      <p><strong>8 DECLARATION BY THE EXPORTER</strong></p>
      <p> &nbsp;&nbsp; We hereby declare that the details and statements provided in this Certificate are true and correct.</p>
      <table style={{width:'100%'}}>
          <tr> <td> <strong>Signature: </strong></td> </tr>
          <tr> <td> <strong>Name: </strong></td> <td> SERENE NEO </td></tr>
          <tr> <td> <strong>Designation: </strong></td> <td> TEAM LEADER </td> </tr>
          <tr> <td> <strong>Date: </strong> </td> <td> 31/01/2020 </td> 
             <td style={{width:'30%'}}>  </td>
             <td style={{width:'30%'}}> stamp </td> </tr>
      </table>
    </td>
    </tr>

    <tr>
    <td css={leftAlignTd} >
    <p><span><strong >4 Vessel Name/Flight No.</strong> 	</span>
      <span style={{float:'right'}}>{document.data.eco.coVslFlt}  </span> </p>
    </td>
    </tr>
    
    <tr>
    <td css={leftAlignTd} >
    <p><span><strong >5 Port of Discharge</strong> 	</span>
      <span style={{float:'right'}}>{document.data.eco.coPortOfDisch}  </span> </p>
    </td>
    </tr>
    
    <tr>
    <td css={leftAlignTd} >
    <p><span><strong >6 Country of Final Destination</strong> 	</span>
      <span style={{float:'right'}}>{document.data.eco.coFinaldestCtryCd}  </span> </p>
    </td>
    </tr>
    
    <tr>
    <td css={leftAlignTd} >
    <p><span><strong >7 Country of Origin of Goods</strong> 	</span>
      <span style={{float:'right'}}>{document.data.eco.coOriginCtryDesc}  </span> </p>
    </td>
    </tr>
    <tr>
    <td colSpan={2}>
      <table style={{width:'100%'}} >
          <tr>
            <td style={{width:'20%'}} ></td>
            <td style={{width:'50%'}} ></td>
            <td style={{width:'30%'}} ></td>
          </tr>
        {document.data.eco.TDocCoItems.map(item => (
          <TemplateItem coiDesc={item.coiDesc} coiQty={item.coiQty} coiQtyUom={item.coiQtyUom}/>
        ))}
      </table>
    </td>
    </tr>

    <tr>
    <td  css={leftAlignTd}   colSpan={2}>
    <p>12 CERTIFICATION BY THE COMPETENT AUTHORITY</p>
      <p>We hereby certify that evidence has been produced to satisfy us 
    that the goods specified above originate in/were processed in the
    country shown in box 7. This Certificate is therefore issued and certified to the best of our knowledge
    and belief to be correct and without any liability on our part.</p>
    <table  style={{width:'100%'}} >
    <tr>
    
		<td style={{width:'30%'}} >
		</td>
		<td style={{width:'30%'}} >
            <img   width="200"
                src = "https://smarteco.vcargocloud.com/store/template/resources/stamp_SICC_T.png" >
        </img>
		</td>
		<td style={{width:'30%'}} >
            <img  width="120"
                src = "https://smarteco.vcargocloud.com/store/template/resources/stamp_ICC.png" >
        </img>
		</td>
    </tr>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </div>
  );
};