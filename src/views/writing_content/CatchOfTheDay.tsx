// import { Client } from "@notionhq/client";
import React, { useState } from "react";
import styled from "styled-components";

// import "dotenv/config";

import { Fishies, Fishie } from "./fish/fish";
import MonthPicker from "./MonthPicker";

// const notion = new Client({
//   auth:
//     "secret_56yrzuvqksjeC4MGhPu6tbQchQ0QniQcTSzVyUldmAl" ??
//     process.env.NOTION_API_KEY
// });
// export async function getFish() {
//   const databaseId =
//     "a758e87026f043d3831ef67faceab8be" ?? process.env.NOTION_DATABASE_ID;
//   const response = await notion.databases.query({
//     database_id: databaseId
//   });
//   return response.results.map((page: any) => {
//     // row represents a row in our database and the name of the column is the
//     // way to reference the data in that column
//     console.log(page);
//     const labelCell = page.properties.label;
//     const urlCell = page.properties.url;

//     // Depending on the column "type" we selected in Notion there will be different
//     // data available to us (URL vs Date vs text for example) so in order for Typescript
//     // to safely infer we have to check the `type` value.  We had one text and one url column.
//     const isLabel = labelCell.type === "rich_text";
//     const isUrl = urlCell.type === "url";

//     // Verify the types are correct
//     if (isLabel && isUrl) {
//       // Return it in our `ThingToLearn` shape
//       return {
//         id: page.id,
//         label: labelCell.rich_text?.[0].plain_text,
//         url: urlCell.url ?? ""
//       };
//     }
//     // ({
//     //   id: page.id,
//     //   label: page.properties["label"].text.content,
//     //   url: page.properties["url"].url
//     // });
//   });
// }

const CatchOfTheDay = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const fishie: Fishie | undefined = Fishies.find(
    (element) =>
      selectedDate &&
      element.date.toDateString() === selectedDate.toDateString()
  );

  return (
    <div>
      <SelectedDate>
        {selectedDate && (
          <div>
            {/* <img src={} alt={`Day ${selectedDate}`} /> */}
            <p>{selectedDate.toDateString()}</p>
            <p>{fishie && fishie.commonName}</p>
            <p>{fishie && fishie.description}</p>
          </div>
        )}
      </SelectedDate>
      <MonthPicker
        startYear={2024}
        startMonth={0}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </div>
  );
};

const SelectedDate = styled.div`
  text-align: center;
  margin-bottom: 10px;

  img {
    max-width: 100px;
    max-height: 100px;
  }
`;

export default CatchOfTheDay;
