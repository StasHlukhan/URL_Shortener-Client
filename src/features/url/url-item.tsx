import { IUrl } from 'widgets/url/model/types';
import { deleteUrl } from './model/api';
import { useAppDispatch } from 'shared/hooks/reducer';
import { urlRemoved } from 'shared/store/urls/slice';
import KGButton from 'shared/ui/button/KGButton';
import KGSvg from 'shared/ui/svg/KGSvg';
import { notify } from 'shared/ui/theme/notification';
import UrlLinks from 'entities/url/url-links';
interface UrlItemProps {
  url: IUrl;
}
const UrlItem = ({ url }: UrlItemProps) => {
  const dispatch = useAppDispatch()
  
 
  const handleDeleteUrl = async (id: string) => {
    try {
      await deleteUrl(id)
      dispatch(urlRemoved(id));
      notify({message:"Successful Removal",type:200})
    } catch (e: unknown) {
      const err = e as Error;
      notify({message:"Failed Removal",type:1000})

      console.log(err);
    }
  };
  return (
    <div className="flex justify-center items-center w-full px-10 py-2 font-noto-sans bg-white hover:bg-gray-100">
      <UrlLinks url={url}/>
      <KGButton
        className="bg-transparent text-red-400 border-[1.5px] border-red-400 font-medium rounded-lg text-sm inline-flex items-center text-center ml-2"
        onClick={() => handleDeleteUrl(url.id)}
      >
        <KGSvg className="mr-2 h-5 w-5">
          <path d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"></path>
        </KGSvg>
        Delete URL
      </KGButton>
    </div>
  );
};

export default UrlItem;
