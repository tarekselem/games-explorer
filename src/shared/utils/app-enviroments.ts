enum Enviroment {
  PRODUCTION = "production",
  DEVELOPMENT = "development",
  PREVIEW = "preview",
}

export const getCurrentEnviroment = (): Enviroment =>
  process.env.NODE_ENV as Enviroment;

export const isDevelopement = (): boolean =>
  process.env.NODE_ENV === Enviroment.DEVELOPMENT;
