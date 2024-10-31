import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

let data;
const turnOutJson = {
  title: "EU_TURNOUT_TITLE",
  years: [
    {
      yearId: "1979",
      turnoutByYear: {
        turnoutEU: {
          status: "FINAL",
          time: null,
          percent: 61.99,
        },
        turnoutByCountry: [
          {
            countryId: "BE",
            status: "FINAL",
            time: null,
            percent: 91.36,
          },
          {
            countryId: "DK",
            status: "FINAL",
            time: null,
            percent: 47.82,
          },
          {
            countryId: "DE",
            status: "FINAL",
            time: null,
            percent: 65.73,
          },
          {
            countryId: "IE",
            status: "FINAL",
            time: null,
            percent: 63.61,
          },
          {
            countryId: "FR",
            status: "FINAL",
            time: null,
            percent: 60.71,
          },
          {
            countryId: "IT",
            status: "FINAL",
            time: null,
            percent: 85.65,
          },
          {
            countryId: "LU",
            status: "FINAL",
            time: null,
            percent: 88.91,
          },
          {
            countryId: "NL",
            status: "FINAL",
            time: null,
            percent: 58.12,
          },
          {
            countryId: "UK",
            status: "FINAL",
            time: null,
            percent: 32.35,
          },
        ],
      },
    },
    {
      yearId: "1981",
      turnoutByYear: {
        turnoutEU: null,
        turnoutByCountry: [
          {
            countryId: "EL",
            status: "FINAL",
            time: null,
            percent: 81.48,
          },
        ],
      },
    },
    {
      yearId: "1984",
      turnoutByYear: {
        turnoutEU: {
          status: "FINAL",
          time: null,
          percent: 58.98,
        },
        turnoutByCountry: [
          {
            countryId: "BE",
            status: "FINAL",
            time: null,
            percent: 92.09,
          },
          {
            countryId: "DK",
            status: "FINAL",
            time: null,
            percent: 52.38,
          },
          {
            countryId: "DE",
            status: "FINAL",
            time: null,
            percent: 56.76,
          },
          {
            countryId: "IE",
            status: "FINAL",
            time: null,
            percent: 47.56,
          },
          {
            countryId: "FR",
            status: "FINAL",
            time: null,
            percent: 56.72,
          },
          {
            countryId: "IT",
            status: "FINAL",
            time: null,
            percent: 82.47,
          },
          {
            countryId: "LU",
            status: "FINAL",
            time: null,
            percent: 88.79,
          },
          {
            countryId: "NL",
            status: "FINAL",
            time: null,
            percent: 50.88,
          },
          {
            countryId: "UK",
            status: "FINAL",
            time: null,
            percent: 32.57,
          },
          {
            countryId: "EL",
            status: "FINAL",
            time: null,
            percent: 80.59,
          },
        ],
      },
    },
    {
      yearId: "1987",
      turnoutByYear: {
        turnoutEU: null,
        turnoutByCountry: [
          {
            countryId: "ES",
            status: "FINAL",
            time: null,
            percent: 68.52,
          },
          {
            countryId: "PT",
            status: "FINAL",
            time: null,
            percent: 72.42,
          },
        ],
      },
    },
    {
      yearId: "1989",
      turnoutByYear: {
        turnoutEU: {
          status: "FINAL",
          time: null,
          percent: 58.41,
        },
        turnoutByCountry: [
          {
            countryId: "BE",
            status: "FINAL",
            time: null,
            percent: 90.73,
          },
          {
            countryId: "DK",
            status: "FINAL",
            time: null,
            percent: 46.17,
          },
          {
            countryId: "DE",
            status: "FINAL",
            time: null,
            percent: 62.28,
          },
          {
            countryId: "IE",
            status: "FINAL",
            time: null,
            percent: 68.28,
          },
          {
            countryId: "FR",
            status: "FINAL",
            time: null,
            percent: 48.8,
          },
          {
            countryId: "IT",
            status: "FINAL",
            time: null,
            percent: 81.07,
          },
          {
            countryId: "LU",
            status: "FINAL",
            time: null,
            percent: 87.39,
          },
          {
            countryId: "NL",
            status: "FINAL",
            time: null,
            percent: 47.48,
          },
          {
            countryId: "UK",
            status: "FINAL",
            time: null,
            percent: 36.37,
          },
          {
            countryId: "EL",
            status: "FINAL",
            time: null,
            percent: 80.03,
          },
          {
            countryId: "ES",
            status: "FINAL",
            time: null,
            percent: 54.71,
          },
          {
            countryId: "PT",
            status: "FINAL",
            time: null,
            percent: 51.1,
          },
        ],
      },
    },
    {
      yearId: "1994",
      turnoutByYear: {
        turnoutEU: {
          status: "FINAL",
          time: null,
          percent: 56.67,
        },
        turnoutByCountry: [
          {
            countryId: "BE",
            status: "FINAL",
            time: null,
            percent: 90.66,
          },
          {
            countryId: "DK",
            status: "FINAL",
            time: null,
            percent: 52.92,
          },
          {
            countryId: "DE",
            status: "FINAL",
            time: null,
            percent: 60.02,
          },
          {
            countryId: "IE",
            status: "FINAL",
            time: null,
            percent: 43.98,
          },
          {
            countryId: "FR",
            status: "FINAL",
            time: null,
            percent: 52.71,
          },
          {
            countryId: "IT",
            status: "FINAL",
            time: null,
            percent: 73.6,
          },
          {
            countryId: "LU",
            status: "FINAL",
            time: null,
            percent: 88.55,
          },
          {
            countryId: "NL",
            status: "FINAL",
            time: null,
            percent: 35.69,
          },
          {
            countryId: "UK",
            status: "FINAL",
            time: null,
            percent: 36.43,
          },
          {
            countryId: "EL",
            status: "FINAL",
            time: null,
            percent: 73.18,
          },
          {
            countryId: "ES",
            status: "FINAL",
            time: null,
            percent: 59.14,
          },
          {
            countryId: "PT",
            status: "FINAL",
            time: null,
            percent: 35.54,
          },
        ],
      },
    },
    {
      yearId: "1995",
      turnoutByYear: {
        turnoutEU: null,
        turnoutByCountry: [
          {
            countryId: "SE",
            status: "FINAL",
            time: null,
            percent: 41.63,
          },
        ],
      },
    },
    {
      yearId: "1996",
      turnoutByYear: {
        turnoutEU: null,
        turnoutByCountry: [
          {
            countryId: "AT",
            status: "FINAL",
            time: null,
            percent: 67.73,
          },
          {
            countryId: "FI",
            status: "FINAL",
            time: null,
            percent: 57.6,
          },
        ],
      },
    },
    {
      yearId: "1999",
      turnoutByYear: {
        turnoutEU: {
          status: "FINAL",
          time: null,
          percent: 49.51,
        },
        turnoutByCountry: [
          {
            countryId: "BE",
            status: "FINAL",
            time: null,
            percent: 91.05,
          },
          {
            countryId: "DK",
            status: "FINAL",
            time: null,
            percent: 50.46,
          },
          {
            countryId: "DE",
            status: "FINAL",
            time: null,
            percent: 45.19,
          },
          {
            countryId: "IE",
            status: "FINAL",
            time: null,
            percent: 50.21,
          },
          {
            countryId: "FR",
            status: "FINAL",
            time: null,
            percent: 46.76,
          },
          {
            countryId: "IT",
            status: "FINAL",
            time: null,
            percent: 69.76,
          },
          {
            countryId: "LU",
            status: "FINAL",
            time: null,
            percent: 87.27,
          },
          {
            countryId: "NL",
            status: "FINAL",
            time: null,
            percent: 30.02,
          },
          {
            countryId: "UK",
            status: "FINAL",
            time: null,
            percent: 24.0,
          },
          {
            countryId: "EL",
            status: "FINAL",
            time: null,
            percent: 70.25,
          },
          {
            countryId: "ES",
            status: "FINAL",
            time: null,
            percent: 63.05,
          },
          {
            countryId: "PT",
            status: "FINAL",
            time: null,
            percent: 39.93,
          },
          {
            countryId: "SE",
            status: "FINAL",
            time: null,
            percent: 38.84,
          },
          {
            countryId: "AT",
            status: "FINAL",
            time: null,
            percent: 49.4,
          },
          {
            countryId: "FI",
            status: "FINAL",
            time: null,
            percent: 30.14,
          },
        ],
      },
    },
    {
      yearId: "2004",
      turnoutByYear: {
        turnoutEU: {
          status: "FINAL",
          time: null,
          percent: 45.47,
        },
        turnoutByCountry: [
          {
            countryId: "BE",
            status: "FINAL",
            time: null,
            percent: 90.81,
          },
          {
            countryId: "DK",
            status: "FINAL",
            time: null,
            percent: 47.89,
          },
          {
            countryId: "DE",
            status: "FINAL",
            time: null,
            percent: 43.0,
          },
          {
            countryId: "IE",
            status: "FINAL",
            time: null,
            percent: 58.58,
          },
          {
            countryId: "FR",
            status: "FINAL",
            time: null,
            percent: 42.76,
          },
          {
            countryId: "IT",
            status: "FINAL",
            time: null,
            percent: 71.72,
          },
          {
            countryId: "LU",
            status: "FINAL",
            time: null,
            percent: 91.35,
          },
          {
            countryId: "NL",
            status: "FINAL",
            time: null,
            percent: 39.26,
          },
          {
            countryId: "UK",
            status: "FINAL",
            time: null,
            percent: 38.52,
          },
          {
            countryId: "EL",
            status: "FINAL",
            time: null,
            percent: 63.22,
          },
          {
            countryId: "ES",
            status: "FINAL",
            time: null,
            percent: 45.14,
          },
          {
            countryId: "PT",
            status: "FINAL",
            time: null,
            percent: 38.6,
          },
          {
            countryId: "SE",
            status: "FINAL",
            time: null,
            percent: 37.85,
          },
          {
            countryId: "AT",
            status: "FINAL",
            time: null,
            percent: 42.43,
          },
          {
            countryId: "FI",
            status: "FINAL",
            time: null,
            percent: 39.43,
          },
          {
            countryId: "CZ",
            status: "FINAL",
            time: null,
            percent: 28.3,
          },
          {
            countryId: "EE",
            status: "FINAL",
            time: null,
            percent: 26.83,
          },
          {
            countryId: "CY",
            status: "FINAL",
            time: null,
            percent: 72.5,
          },
          {
            countryId: "LT",
            status: "FINAL",
            time: null,
            percent: 48.38,
          },
          {
            countryId: "LV",
            status: "FINAL",
            time: null,
            percent: 41.34,
          },
          {
            countryId: "HU",
            status: "FINAL",
            time: null,
            percent: 38.5,
          },
          {
            countryId: "MT",
            status: "FINAL",
            time: null,
            percent: 82.39,
          },
          {
            countryId: "PL",
            status: "FINAL",
            time: null,
            percent: 20.87,
          },
          {
            countryId: "SI",
            status: "FINAL",
            time: null,
            percent: 28.35,
          },
          {
            countryId: "SK",
            status: "FINAL",
            time: null,
            percent: 16.97,
          },
        ],
      },
    },
    {
      yearId: "2007",
      turnoutByYear: {
        turnoutEU: null,
        turnoutByCountry: [
          {
            countryId: "BG",
            status: "FINAL",
            time: null,
            percent: 29.22,
          },
          {
            countryId: "RO",
            status: "FINAL",
            time: null,
            percent: 29.47,
          },
        ],
      },
    },
    {
      yearId: "2009",
      turnoutByYear: {
        turnoutEU: {
          status: "FINAL",
          time: null,
          percent: 42.97,
        },
        turnoutByCountry: [
          {
            countryId: "BE",
            status: "FINAL",
            time: null,
            percent: 90.39,
          },
          {
            countryId: "DK",
            status: "FINAL",
            time: null,
            percent: 59.54,
          },
          {
            countryId: "DE",
            status: "FINAL",
            time: null,
            percent: 43.27,
          },
          {
            countryId: "IE",
            status: "FINAL",
            time: null,
            percent: 58.64,
          },
          {
            countryId: "FR",
            status: "FINAL",
            time: null,
            percent: 40.63,
          },
          {
            countryId: "IT",
            status: "FINAL",
            time: null,
            percent: 66.47,
          },
          {
            countryId: "LU",
            status: "FINAL",
            time: null,
            percent: 90.76,
          },
          {
            countryId: "NL",
            status: "FINAL",
            time: null,
            percent: 36.75,
          },
          {
            countryId: "UK",
            status: "FINAL",
            time: null,
            percent: 34.7,
          },
          {
            countryId: "EL",
            status: "FINAL",
            time: null,
            percent: 52.54,
          },
          {
            countryId: "ES",
            status: "FINAL",
            time: null,
            percent: 44.87,
          },
          {
            countryId: "PT",
            status: "FINAL",
            time: null,
            percent: 36.77,
          },
          {
            countryId: "SE",
            status: "FINAL",
            time: null,
            percent: 45.53,
          },
          {
            countryId: "AT",
            status: "FINAL",
            time: null,
            percent: 45.97,
          },
          {
            countryId: "FI",
            status: "FINAL",
            time: null,
            percent: 38.6,
          },
          {
            countryId: "CZ",
            status: "FINAL",
            time: null,
            percent: 28.22,
          },
          {
            countryId: "EE",
            status: "FINAL",
            time: null,
            percent: 43.9,
          },
          {
            countryId: "CY",
            status: "FINAL",
            time: null,
            percent: 59.4,
          },
          {
            countryId: "LT",
            status: "FINAL",
            time: null,
            percent: 20.98,
          },
          {
            countryId: "LV",
            status: "FINAL",
            time: null,
            percent: 53.7,
          },
          {
            countryId: "HU",
            status: "FINAL",
            time: null,
            percent: 36.31,
          },
          {
            countryId: "MT",
            status: "FINAL",
            time: null,
            percent: 78.79,
          },
          {
            countryId: "PL",
            status: "FINAL",
            time: null,
            percent: 24.53,
          },
          {
            countryId: "SI",
            status: "FINAL",
            time: null,
            percent: 28.37,
          },
          {
            countryId: "SK",
            status: "FINAL",
            time: null,
            percent: 19.64,
          },
          {
            countryId: "BG",
            status: "FINAL",
            time: null,
            percent: 38.99,
          },
          {
            countryId: "RO",
            status: "FINAL",
            time: null,
            percent: 27.67,
          },
        ],
      },
    },
    {
      yearId: "2013",
      turnoutByYear: {
        turnoutEU: null,
        turnoutByCountry: [
          {
            countryId: "HR",
            status: "FINAL",
            time: null,
            percent: 20.84,
          },
        ],
      },
    },
    {
      yearId: "2014",
      turnoutByYear: {
        turnoutEU: {
          status: "FINAL",
          time: null,
          percent: 42.61,
        },
        turnoutByCountry: [
          {
            countryId: "BE",
            status: "FINAL",
            time: null,
            percent: 89.64,
          },
          {
            countryId: "DK",
            status: "FINAL",
            time: null,
            percent: 56.32,
          },
          {
            countryId: "DE",
            status: "FINAL",
            time: null,
            percent: 48.1,
          },
          {
            countryId: "IE",
            status: "FINAL",
            time: null,
            percent: 52.44,
          },
          {
            countryId: "FR",
            status: "FINAL",
            time: null,
            percent: 42.43,
          },
          {
            countryId: "IT",
            status: "FINAL",
            time: null,
            percent: 57.22,
          },
          {
            countryId: "LU",
            status: "FINAL",
            time: null,
            percent: 85.55,
          },
          {
            countryId: "NL",
            status: "FINAL",
            time: null,
            percent: 37.32,
          },
          {
            countryId: "UK",
            status: "FINAL",
            time: null,
            percent: 35.6,
          },
          {
            countryId: "EL",
            status: "FINAL",
            time: null,
            percent: 59.97,
          },
          {
            countryId: "ES",
            status: "FINAL",
            time: null,
            percent: 43.81,
          },
          {
            countryId: "PT",
            status: "FINAL",
            time: null,
            percent: 33.67,
          },
          {
            countryId: "SE",
            status: "FINAL",
            time: null,
            percent: 51.07,
          },
          {
            countryId: "AT",
            status: "FINAL",
            time: null,
            percent: 45.39,
          },
          {
            countryId: "FI",
            status: "FINAL",
            time: null,
            percent: 39.1,
          },
          {
            countryId: "CZ",
            status: "FINAL",
            time: null,
            percent: 18.2,
          },
          {
            countryId: "EE",
            status: "FINAL",
            time: null,
            percent: 36.52,
          },
          {
            countryId: "CY",
            status: "FINAL",
            time: null,
            percent: 43.97,
          },
          {
            countryId: "LT",
            status: "FINAL",
            time: null,
            percent: 47.35,
          },
          {
            countryId: "LV",
            status: "FINAL",
            time: null,
            percent: 30.24,
          },
          {
            countryId: "HU",
            status: "FINAL",
            time: null,
            percent: 28.97,
          },
          {
            countryId: "MT",
            status: "FINAL",
            time: null,
            percent: 74.8,
          },
          {
            countryId: "PL",
            status: "FINAL",
            time: null,
            percent: 23.83,
          },
          {
            countryId: "SI",
            status: "FINAL",
            time: null,
            percent: 24.55,
          },
          {
            countryId: "SK",
            status: "FINAL",
            time: null,
            percent: 13.05,
          },
          {
            countryId: "BG",
            status: "FINAL",
            time: null,
            percent: 35.84,
          },
          {
            countryId: "RO",
            status: "FINAL",
            time: null,
            percent: 32.44,
          },
          {
            countryId: "HR",
            status: "FINAL",
            time: null,
            percent: 25.24,
          },
        ],
      },
    },
    {
      yearId: "2019",
      turnoutByYear: {
        turnoutEU: {
          status: "FINAL",
          time: null,
          percent: 50.66,
        },
        turnoutByCountry: [
          {
            countryId: "BE",
            status: "FINAL",
            time: null,
            percent: 88.47,
          },
          {
            countryId: "DK",
            status: "FINAL",
            time: null,
            percent: 66.08,
          },
          {
            countryId: "DE",
            status: "FINAL",
            time: null,
            percent: 61.38,
          },
          {
            countryId: "IE",
            status: "FINAL",
            time: null,
            percent: 49.7,
          },
          {
            countryId: "FR",
            status: "FINAL",
            time: null,
            percent: 50.12,
          },
          {
            countryId: "IT",
            status: "FINAL",
            time: null,
            percent: 54.5,
          },
          {
            countryId: "LU",
            status: "FINAL",
            time: null,
            percent: 84.24,
          },
          {
            countryId: "NL",
            status: "FINAL",
            time: null,
            percent: 41.93,
          },
          {
            countryId: "UK",
            status: "FINAL",
            time: null,
            percent: 37.18,
          },
          {
            countryId: "EL",
            status: "FINAL",
            time: null,
            percent: 58.69,
          },
          {
            countryId: "ES",
            status: "FINAL",
            time: null,
            percent: 60.73,
          },
          {
            countryId: "PT",
            status: "FINAL",
            time: null,
            percent: 30.75,
          },
          {
            countryId: "SE",
            status: "FINAL",
            time: null,
            percent: 55.27,
          },
          {
            countryId: "AT",
            status: "FINAL",
            time: null,
            percent: 59.8,
          },
          {
            countryId: "FI",
            status: "FINAL",
            time: null,
            percent: 40.8,
          },
          {
            countryId: "CZ",
            status: "FINAL",
            time: null,
            percent: 28.72,
          },
          {
            countryId: "EE",
            status: "FINAL",
            time: null,
            percent: 37.6,
          },
          {
            countryId: "CY",
            status: "FINAL",
            time: null,
            percent: 44.99,
          },
          {
            countryId: "LT",
            status: "FINAL",
            time: null,
            percent: 53.48,
          },
          {
            countryId: "LV",
            status: "FINAL",
            time: null,
            percent: 33.53,
          },
          {
            countryId: "HU",
            status: "FINAL",
            time: null,
            percent: 43.36,
          },
          {
            countryId: "MT",
            status: "FINAL",
            time: null,
            percent: 72.7,
          },
          {
            countryId: "PL",
            status: "FINAL",
            time: null,
            percent: 45.68,
          },
          {
            countryId: "SI",
            status: "FINAL",
            time: null,
            percent: 28.89,
          },
          {
            countryId: "SK",
            status: "FINAL",
            time: null,
            percent: 22.74,
          },
          {
            countryId: "BG",
            status: "FINAL",
            time: null,
            percent: 32.64,
          },
          {
            countryId: "RO",
            status: "FINAL",
            time: null,
            percent: 51.2,
          },
          {
            countryId: "HR",
            status: "FINAL",
            time: null,
            percent: 29.85,
          },
        ],
      },
    },
    {
      yearId: "2024",
      turnoutByYear: {
        turnoutEU: {
          status: "FINAL",
          time: "2024-09-06T11:28:43.795+0200",
          percent: 50.74,
        },
        turnoutByCountry: [
          {
            countryId: "BE",
            status: "FINAL",
            time: "2024-06-28T12:09:31.385+0200",
            percent: 89.01,
          },
          {
            countryId: "BG",
            status: "FINAL",
            time: "2024-06-17T12:52:47.940+0200",
            percent: 33.78,
          },
          {
            countryId: "CZ",
            status: "FINAL",
            time: "2024-06-10T14:19:29.626+0200",
            percent: 36.45,
          },
          {
            countryId: "DK",
            status: "FINAL",
            time: "2024-06-12T11:28:58.028+0200",
            percent: 58.25,
          },
          {
            countryId: "DE",
            status: "FINAL",
            time: "2024-07-04T12:41:28.398+0200",
            percent: 64.74,
          },
          {
            countryId: "EE",
            status: "FINAL",
            time: "2024-09-06T10:50:45.025+0200",
            percent: 37.64,
          },
          {
            countryId: "IE",
            status: "FINAL",
            time: "2024-07-16T09:44:51.099+0200",
            percent: 50.65,
          },
          {
            countryId: "EL",
            status: "FINAL",
            time: "2024-09-06T10:50:45.025+0200",
            percent: 41.24,
          },
          {
            countryId: "ES",
            status: "FINAL",
            time: "2024-09-06T11:28:43.795+0200",
            percent: 46.39,
          },
          {
            countryId: "FR",
            status: "FINAL",
            time: "2024-06-17T12:52:47.940+0200",
            percent: 51.49,
          },
          {
            countryId: "IT",
            status: "PROVISIONAL",
            time: "2024-06-12T14:58:09.982+0200",
            percent: 48.31,
          },
          {
            countryId: "CY",
            status: "FINAL",
            time: "2024-06-10T09:38:57.608+0200",
            percent: 58.86,
          },
          {
            countryId: "LV",
            status: "FINAL",
            time: "2024-07-10T12:03:53.375+0200",
            percent: 33.82,
          },
          {
            countryId: "LT",
            status: "FINAL",
            time: "2024-09-06T10:50:45.025+0200",
            percent: 28.97,
          },
          {
            countryId: "LU",
            status: "FINAL",
            time: "2024-09-06T10:50:45.025+0200",
            percent: 82.29,
          },
          {
            countryId: "HU",
            status: "FINAL",
            time: "2024-06-18T10:58:33.234+0200",
            percent: 59.46,
          },
          {
            countryId: "MT",
            status: "FINAL",
            time: "2024-09-06T10:50:45.025+0200",
            percent: 72.98,
          },
          {
            countryId: "NL",
            status: "FINAL",
            time: "2024-06-20T10:22:30.257+0200",
            percent: 46.18,
          },
          {
            countryId: "AT",
            status: "FINAL",
            time: "2024-07-08T12:46:54.759+0200",
            percent: 56.25,
          },
          {
            countryId: "PL",
            status: "FINAL",
            time: "2024-06-10T09:01:40.356+0200",
            percent: 40.65,
          },
          {
            countryId: "PT",
            status: "FINAL",
            time: "2024-09-06T10:50:45.025+0200",
            percent: 36.47,
          },
          {
            countryId: "RO",
            status: "FINAL",
            time: "2024-09-06T10:50:45.025+0200",
            percent: 52.4,
          },
          {
            countryId: "SI",
            status: "FINAL",
            time: "2024-06-28T12:09:31.385+0200",
            percent: 41.8,
          },
          {
            countryId: "SK",
            status: "FINAL",
            time: "2024-06-10T09:01:40.356+0200",
            percent: 34.38,
          },
          {
            countryId: "FI",
            status: "FINAL",
            time: "2024-09-06T10:50:45.025+0200",
            percent: 40.38,
          },
          {
            countryId: "SE",
            status: "FINAL",
            time: "2024-06-17T14:09:48.887+0200",
            percent: 53.39,
          },
          {
            countryId: "HR",
            status: "FINAL",
            time: "2024-06-12T14:58:09.982+0200",
            percent: 21.35,
          },
        ],
      },
    },
  ],
};

app.get("/", (req, res) => {
  res.render("index.ejs", { election: data });
});


app.post("/turnout", (req, res) => {
  let data = null;
  switch (req.body.year) {
    case "1979":
      data = turnOutJson.years[0];
      break;
    case "1981":
      data = turnOutJson.years[1];
      break;
    case "1984":
      data = turnOutJson.years[2];
      break;
    case "1987":
      data = turnOutJson.years[3];
      break;
    case "1989":
      data = turnOutJson.years[4];
      break;
    case "1994":
      data = turnOutJson.years[5];
      break;
    case "1995":
      data = turnOutJson.years[6];
      break;
    case "1997":
      data = turnOutJson.years[7]; // Adjusted to 1997
      break;
    case "1999":
      data = turnOutJson.years[8];
      break;
    case "2004":
      data = turnOutJson.years[9];
      break;
    case "2007":
      data = turnOutJson.years[10];
      break;
    case "2009":
      data = turnOutJson.years[11];
      break;
    case "2013":
      data = turnOutJson.years[12];
      break;
    case "2014":
      data = turnOutJson.years[13];
      break;
    case "2019":
      data = turnOutJson.years[14];
      break;
    case "2024":
      data = turnOutJson.years[15];
      break;
    default:
      data = null;
      break;
  }
  res.render("index.ejs", { election: data });
});




app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
