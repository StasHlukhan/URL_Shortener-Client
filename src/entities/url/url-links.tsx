import React, { useState } from 'react';
import { IUrl } from 'widgets/url/model/types';
interface Props {
  url: IUrl;
}
const UrlLinks = ({ url }: Props) => {
  const [isCopied, setIsCopied] = useState(false);
  const copyLongUrl = () => {
    navigator.clipboard
      .writeText(url.shortUrl)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((error) => {
        console.error('Помилка під час копіювання URL:', error);
      });
  };
  return (
    <>
      <div className="w-1/4 p-4 whitespace-nowrap text-base font-normal flex   text-gray-900">
        {url.longUrl.length > 30 ? (
          <div className="border-2 w-full  p-2 border-zinc-600 flex justify-between">
            {url.longUrl.slice(0, 20)}...
          </div>
        ) : (
          <div className="border-2 w-full  p-2 border-zinc-600 flex justify-between">
            {url.longUrl}
          </div>
        )}
      </div>
      <div className=" border-2 justify-between  border-zinc-600 flex w-1/3 p-2 whitespace-nowrap text-base font-normal text-gray-900">
        {url.shortUrl}{' '}
        <button onClick={copyLongUrl} className="ml-2 underline flex justify-center">
          {isCopied ? (
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-sharp/24/checkmark--v1.png"
              alt="checkmark--v1"
            />
          ) : (
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/windows/32/copy.png"
              alt="copy"
            />
          )}
        </button>
      </div>
    </>
  );
};

export default UrlLinks;
