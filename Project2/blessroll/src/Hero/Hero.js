import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import { useTranslation } from 'react-i18next';
import './Hero.css';

function Hero() {

  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <Alert variant="success" className="alert-custom">
        <Alert.Heading>{t('crodeness-alert-header')}</Alert.Heading>
        <p>
        {t('crodeness-alert-content')}
        </p>
      </Alert>

      <Container id="hero">
        <Col xs={6} md={4}>
          <Image
            src="http://www.blessroll.com/images/common/bbb_main_banner01.jpg"
            alt="Bless roll"
            className="hero-image"
          />
        </Col>
      </Container>
    </div>
  );
}

export default Hero;
