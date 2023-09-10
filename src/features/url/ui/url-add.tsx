/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { postUrl } from '../model/api';
import { urlAdded } from 'shared/store/urls/slice';
import { notify } from 'shared/ui/theme/notification';
import KGInput from 'shared/ui/Input/KGInput';
import KGButton from 'shared/ui/button/KGButton';
import { useAppDispatch } from 'shared/hooks/reducer';
interface UrlRequest {
  url: string;
}
const UrlAdd = () => {
  const dispatch = useAppDispatch();
  const [urlData, setUrlData] = useState<UrlRequest>({
    url: '',
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof UrlRequest,
  ) => {
    const { value } = event.target;

    setUrlData((prevEditedGuest) => ({
      ...prevEditedGuest,
      [fieldName]: value,
    }));
  };

  const handleAddGuest = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
    const success = await postUrl(urlData.url);
    console.log(success);
      if (success) {
        dispatch(urlAdded(success));
        console.log(success);
        notify({ message: 'Success', type: '200' });
      }
    } catch (e: any) {
      notify({ message: e.response.data.message, type: '10000' });
    }

    setUrlData({
      url: '',
    });
  };
  return (
    <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
      <div className="mt-10 w-full px-10 flex" >
      <KGInput
        onChange={(e) => handleInputChange(e, 'url')}
        value={urlData.url}
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block mr-2   p-2.5"
      />
      <KGButton
        onClick={handleAddGuest}
        className="bg-transparent  text-zinc-600 border-[1.5px] border-zinc-600"
      >
        Add Url
      </KGButton>
    </div>
    </div>
  );
};

export default UrlAdd;
