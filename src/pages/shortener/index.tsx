import UrlAdd from 'features/url/ui/url-add';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/hooks/reducer';
import { fetchUrls } from 'shared/store/urls/actionCreators';
import Layout from 'widgets/layout';
import UrlList from 'widgets/url/url-list';
import { selectUrls, selectLoadState } from './model/helpers';
import Loader from 'shared/ui/loader';

const ShortenerPage = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectLoadState);

  const urls = useAppSelector(selectUrls);
  useEffect(() => {
    dispatch(fetchUrls());
  }, []);

  return (
    <Layout>
      <div className="flex flex-col w-full items-center">
        <UrlAdd />
        <Loader isLoading={isLoading}>
          <UrlList urls={urls} />
        </Loader>
      </div>
    </Layout>
  );
};

export default ShortenerPage;
