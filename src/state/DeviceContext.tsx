"use client";

import { ReactNode, createContext, useContext } from "react";

import useDeviceDetection from "@/hooks/use-device-detection";

type DeviceType = string | null;
const DeviceContext = createContext<DeviceType>(null);

const useDevice = () => {
  return useContext(DeviceContext);
};

const DeviceProvider = ({ children }: { children: ReactNode }) => {
  const device = useDeviceDetection();

  return (
    <DeviceContext.Provider value={device}>{children}</DeviceContext.Provider>
  );
};

export { useDevice, DeviceProvider };
