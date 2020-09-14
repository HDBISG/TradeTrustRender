import React from 'react';
import { css } from "@emotion/core";

interface TDocCoItems {
  coiDesc: string;
  coiQty: string;
  coiQtyUom:string;
}


const leftAlignTd = css`
  border-collapse: collapse;
  text-align: left;
  padding: 0px 6px;
`;

export default function renderTDocCoItems( tDocCoItems:TDocCoItems ) {
  return (
        <tr>
          <td  css={leftAlignTd} >{tDocCoItems.coiDesc}</td>
          <td>{tDocCoItems.coiQty}</td>
          <td>{tDocCoItems.coiQtyUom}</td>
        </tr>
  );
}