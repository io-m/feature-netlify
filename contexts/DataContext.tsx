"use client";
import { TopicComments } from "@/types/TopicComments";
import React, { ReactNode, createContext } from "react";
// import { OPPORTUNITIES_OVERVIEW2 } from "../data/overviews/opportunitiesOverview2";
import { OPPORTUNITIES_OVERVIEW } from "../data/opportunitiesOverview";
import { OPERATIONS_OVERVIEW } from "../data/operationsOverview";
import { LEARNING_OVERVIEW } from "../data/learningsOverview";
import { GAPS_OVERVIEW } from "../data/gapsOverview";
import { LCA_OVERVIEW } from "../data/lcaOverview";
interface DataContextType {
  opportunityData: TopicComments[];
  operationData: TopicComments[];
  learningsData: TopicComments[];
  gapsData: TopicComments[];
  lcaData: TopicComments[];
}
const defaultDataContextType: DataContextType = {
  opportunityData: OPPORTUNITIES_OVERVIEW,
  operationData: OPERATIONS_OVERVIEW,
  learningsData: LEARNING_OVERVIEW,
  gapsData: GAPS_OVERVIEW,
  lcaData: LCA_OVERVIEW,
};
export const DataContext = createContext<DataContextType>(
  defaultDataContextType
);

export const DataContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <DataContext.Provider value={defaultDataContextType}>
      {children}
    </DataContext.Provider>
  );
};
