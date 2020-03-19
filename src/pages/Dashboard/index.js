import React, { useState, useEffect } from 'react';

import { MagicSpinner } from 'react-spinners-kit';

import api from '../../services/api';
import numberFormat from '../../services/numberformat';
import {
  Container,
  Loading,
  Informations,
  BoxInfo,
  Countries,
  BoxCountry,
} from './styles';

export default function Dashboard() {
  const [cases, setCases] = useState([]);
  const [countries, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      async function loadCases() {
        const response = await api.get('/all');

        const { data } = response;

        setCases(data);
        setLoading(false);
      }
      async function loadCountries() {
        const response = await api.get('/countries');

        const { data } = response;

        setCountry(data);
        setLoading(false);
      }
      loadCases();
      loadCountries();
    }, 3000);
  }, []);

  return (
    <Container>
      <header>
        <h1>COVID-19 no mundo!</h1>
      </header>

      {loading ? (
        <Loading>
          <MagicSpinner size={50} color="#333" loading={loading} />
        </Loading>
      ) : (
        <Informations>
          <BoxInfo>
            <p>Casos:</p>
            <b style={{ color: '#FFF' }}> {numberFormat(cases.cases)}</b>
          </BoxInfo>
          <BoxInfo>
            <p>Mortos: </p>
            <b style={{ color: '#FFF' }}>{numberFormat(cases.deaths)}</b>
          </BoxInfo>
          <BoxInfo>
            <p>Recuperados: </p>
            <b style={{ color: '#FFF' }}>{numberFormat(cases.recovered)}</b>
          </BoxInfo>
        </Informations>
      )}
      <Countries>
        {countries.map(c => (
          <BoxCountry>
            <h2>{c.country}</h2>
            <p>
              Cases: {c.cases} | Hoje: {c.today} | Ativos: {c.active}
            </p>
          </BoxCountry>
        ))}
      </Countries>
    </Container>
  );
}
