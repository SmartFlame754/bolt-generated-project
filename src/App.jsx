import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ServicePage from './pages/ServicePage';
import MainMenu from './components/MainMenu';
import Footer from './components/Footer';
import './index.css';

// Import all service pages
import NetworkCabling from './pages/services/NetworkCabling';
import DataCabling from './pages/services/DataCabling';
import Cat5eCabling from './pages/services/Cat5eCabling';
import Cat6Cabling from './pages/services/Cat6Cabling';
import Cat6aCabling from './pages/services/Cat6aCabling';
import Cat7Cabling from './pages/services/Cat7Cabling';
import FiberOpticCabling from './pages/services/FiberOpticCabling';
import FiberOpticInstallation from './pages/services/FiberOpticInstallation';
import FiberOpticTermination from './pages/services/FiberOpticTermination';
import FusionSplicing from './pages/services/FusionSplicing';
import OTDRTesting from './pages/services/OTDRTesting';
import VoiceCabling from './pages/services/VoiceCabling';
import VoipCabling from './pages/services/VoipCabling';
import PhoneCabling from './pages/services/PhoneCabling';
import StructuredCabling from './pages/services/StructuredCabling';
import PatchPanelInstallation from './pages/services/PatchPanelInstallation';
import CableManagement from './pages/services/CableManagement';
import LowVoltageCabling from './pages/services/LowVoltageCabling';
import CableRemoval from './pages/services/CableRemoval';
import NetworkCableTesting from './pages/services/NetworkCableTesting';
import ServerRoomDataCabling from './pages/services/ServerRoomDataCabling';
import ITServices from './pages/services/ITServices';
import ITSupport from './pages/services/ITSupport';
import ITConsulting from './pages/services/ITConsulting';
import ManagedITServices from './pages/services/ManagedITServices';
import ITSolutions from './pages/services/ITSolutions';
import Cybersecurity from './pages/services/Cybersecurity';
import MicrosoftOffice365Migration from './pages/services/MicrosoftOffice365Migration';
import CloudServices from './pages/services/CloudServices';
import TelecommunicationsServices from './pages/services/TelecommunicationsServices';
import PhoneSystems from './pages/services/PhoneSystems';
import BusinessPhoneService from './pages/services/BusinessPhoneService';
import UnifiedCommunicationSolutions from './pages/services/UnifiedCommunicationSolutions';
import IPTelephony from './pages/services/IPTelephony';
import AudioVideoCabling from './pages/services/AudioVideoCabling';
import AudioVideoInstallations from './pages/services/AudioVideoInstallations';
import HDMICabling from './pages/services/HDMICabling';
import RG6Cabling from './pages/services/RG6Cabling';
import DigitalSignageSystems from './pages/services/DigitalSignageSystems';
import SpeakerSystemInstallation from './pages/services/SpeakerSystemInstallation';
import IntercomSystemInstallation from './pages/services/IntercomSystemInstallation';
import WirelessNetworking from './pages/services/WirelessNetworking';
import CommercialWiFiNetworks from './pages/services/CommercialWiFiNetworks';
import WiFiSurveys from './pages/services/WiFiSurveys';
import Security from './pages/services/Security';
import SecurityCameraInstallation from './pages/services/SecurityCameraInstallation';
import CCTVInstallation from './pages/services/CCTVInstallation';
import AccessControlSystems from './pages/services/AccessControlSystems';
import SecuritySystemInstallation from './pages/services/SecuritySystemInstallation';

function App() {
  return (
      <div className="app">
        <MainMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/:service" element={<ServicePage />} />
          <Route path="/services/network-cabling" element={<NetworkCabling />} />
          <Route path="/services/data-cabling" element={<DataCabling />} />
          <Route path="/services/cat5e-cabling" element={<Cat5eCabling />} />
          <Route path="/services/cat6-cabling" element={<Cat6Cabling />} />
          <Route path="/services/cat6a-cabling" element={<Cat6aCabling />} />
          <Route path="/services/cat7-cabling" element={<Cat7Cabling />} />
          <Route path="/services/fiber-optic-cabling" element={<FiberOpticCabling />} />
          <Route path="/services/fiber-optic-installation" element={<FiberOpticInstallation />} />
          <Route path="/services/fiber-optic-termination" element={<FiberOpticTermination />} />
          <Route path="/services/fusion-splicing" element={<FusionSplicing />} />
          <Route path="/services/otdr-testing" element={<OTDRTesting />} />
          <Route path="/services/voice-cabling" element={<VoiceCabling />} />
          <Route path="/services/voip-cabling" element={<VoipCabling />} />
          <Route path="/services/phone-cabling" element={<PhoneCabling />} />
          <Route path="/services/structured-cabling" element={<StructuredCabling />} />
          <Route path="/services/patch-panel-installation" element={<PatchPanelInstallation />} />
          <Route path="/services/cable-management" element={<CableManagement />} />
          <Route path="/services/low-voltage-cabling" element={<LowVoltageCabling />} />
          <Route path="/services/cable-removal" element={<CableRemoval />} />
          <Route path="/services/network-cable-testing" element={<NetworkCableTesting />} />
          <Route path="/services/server-room-data-cabling" element={<ServerRoomDataCabling />} />
          <Route path="/services/it-services" element={<ITServices />} />
          <Route path="/services/it-support" element={<ITSupport />} />
          <Route path="/services/it-consulting" element={<ITConsulting />} />
          <Route path="/services/managed-it-services" element={<ManagedITServices />} />
          <Route path="/services/it-solutions" element={<ITSolutions />} />
          <Route path="/services/cybersecurity" element={<Cybersecurity />} />
          <Route path="/services/microsoft-office-365-migration" element={<MicrosoftOffice365Migration />} />
          <Route path="/services/cloud-services" element={<CloudServices />} />
          <Route path="/services/telecommunications-services" element={<TelecommunicationsServices />} />
          <Route path="/services/phone-systems" element={<PhoneSystems />} />
          <Route path="/services/business-phone-service" element={<BusinessPhoneService />} />
          <Route path="/services/unified-communication-solutions" element={<UnifiedCommunicationSolutions />} />
          <Route path="/services/ip-telephony" element={<IPTelephony />} />
          <Route path="/services/audio-video-cabling" element={<AudioVideoCabling />} />
          <Route path="/services/audio-video-installations" element={<AudioVideoInstallations />} />
          <Route path="/services/hdmi-cabling" element={<HDMICabling />} />
          <Route path="/services/rg6-cabling" element={<RG6Cabling />} />
          <Route path="/services/digital-signage-systems" element={<DigitalSignageSystems />} />
          <Route path="/services/speaker-system-installation" element={<SpeakerSystemInstallation />} />
          <Route path="/services/intercom-system-installation" element={<IntercomSystemInstallation />} />
          <Route path="/services/wireless-networking" element={<WirelessNetworking />} />
          <Route path="/services/commercial-wi-fi-networks" element={<CommercialWiFiNetworks />} />
          <Route path="/services/wi-fi-surveys" element={<WiFiSurveys />} />
          <Route path="/services/security" element={<Security />} />
          <Route path="/services/security-camera-installation" element={<SecurityCameraInstallation />} />
          <Route path="/services/cctv-installation" element={<CCTVInstallation />} />
          <Route path="/services/access-control-systems" element={<AccessControlSystems />} />
          <Route path="/services/security-system-installation" element={<SecuritySystemInstallation />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
