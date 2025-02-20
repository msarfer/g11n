import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions
} from "@headlessui/react";
import { useContext } from "react";
import {
  FormattedDate,
  FormattedMessage,
  FormattedNumber,
  FormattedTime,
  IntlProvider
} from "react-intl";
import { LanguageContext } from "./context/LanguageContext";

export function Root() {
  const { locale, messages } = useContext(LanguageContext);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <App />
    </IntlProvider>
  );
}

const languages = [
  { value: "es", text: "Español" },
  { value: "en", text: "English" },
];

export function App() {
  const { locale, changeLanguage } = useContext(LanguageContext);
  const language = navigator.language;
  const number = 12345678.9;
  const price = 23.56;
  const date = new Date();

  return (
    <div className="flex flex-col items-center p-6 space-y-6 bg-gray-100 min-h-screen">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            <FormattedMessage
              id="app.languageSelector"
              defaultMessage="Select language:"
            />
          </label>
          <Listbox
            as="div"
            value={locale}
            onChange={changeLanguage}
            className="relative mt-2"
          >
            <ListboxButton className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-left shadow-sm focus:ring-2 focus:ring-blue-500">
              {locale}
            </ListboxButton>
            <ListboxOptions className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
              {languages.map((language) => (
                <ListboxOption
                  key={language.value}
                  value={language.value}
                  className="cursor-pointer px-4 py-2 hover:bg-blue-100"
                >
                  {language.text}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Listbox>
        </div>
      </div>

      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <p className="text-gray-700 text-bold">
          <FormattedMessage id="app.label.language" />: {language}
        </p>
        <p className="text-gray-700">
          <FormattedMessage id="app.label.number" />:{" "}
          <FormattedNumber value={number} style="decimal" />
        </p>
        <p className="text-gray-700">
          <FormattedMessage id="app.label.amount" />:{" "}
          <FormattedNumber value={price} style="currency" currency="EUR" />
        </p>
        <p className="text-gray-700">
          <FormattedMessage id="app.label.date" />:{" "}
          <FormattedDate
            value={date}
            year="numeric"
            month="long"
            day="2-digit"
          />
          , <FormattedTime value={date}/>h
        </p>
      </div>
    </div>
  );
}
