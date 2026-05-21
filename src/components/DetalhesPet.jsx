import { useParams } from 'react-router-dom';
import { usePets } from '../contexts/PetContext';
import MobileHeader from './layout/MobileHeader';
import BottomNav from './BottomNav';
import { useState } from 'react';

export default function DetalhesPet() {
  const { id } = useParams();
  const { getPetById } = usePets();
  const pet = getPetById(id);
  const [mainImage, setMainImage] = useState(pet?.fotos?.[0] || '/img/avatar.png.jpg');

  if (!pet) {
    return (
      <div className="app-container">
        <MobileHeader title="Pet não encontrado" />
        <main className="main-content"><p>Pet não encontrado.</p></main>
        <BottomNav />
      </div>
    );
  }

  const statusExames = pet.saude.exames === 'aprovado' ? 'status-aprovado' : (pet.saude.exames === 'pendente' ? 'status-pendente' : 'status-nao-realizado');
  const statusVacinas = pet.saude.vacinas === 'em dia' ? 'status-aprovado' : (pet.saude.vacinas === 'necessário' ? 'status-pendente' : 'status-nao-realizado');

  return (
    <div className="app-container">
      <MobileHeader title={pet.nome} />
      <main className="main-content">
        <div className="pet-gallery">
          <img src={mainImage} alt={pet.nome} className="main-image" />
          <div className="thumbnail-container">
            {pet.fotos.map((foto, i) => (
              <img key={i} src={foto} alt={`Foto ${i+1}`} className="thumbnail" onClick={() => setMainImage(foto)} />
            ))}
          </div>
        </div>

        <h2>{pet.nome}</h2>
        <p className="location-text"><span className="material-icons">location_on</span> {pet.local}</p>

        <div className="info-cards">
          <div className="info-card"><span className="label">Sexo</span><span className="value">{pet.sexo}</span></div>
          <div className="info-card"><span className="label">Idade</span><span className="value">{pet.idade}</span></div>
          <div className="info-card"><span className="label">Raça</span><span className="value">{pet.raca}</span></div>
          <div className="info-card"><span className="label">Peso</span><span className="value">{pet.peso} kg</span></div>
        </div>

        <div className="dono-card">
          <div className="dono-info">
            <img src={pet.dono.foto} alt={pet.dono.nome} className="dono-foto" />
            <span className="dono-nome">{pet.dono.nome}</span>
          </div>
          <div className="dono-actions">
            <span className="material-icons">chat_bubble</span>
            <span className="material-icons">phone</span>
          </div>
        </div>

        <p className="pet-descricao">{pet.descricao}</p>

        <div className="health-section">
          <h3>Documentos e Saúde</h3>
          <div className="health-item"><span>Pedigree</span>{pet.saude.pedigree ? <a href="#"><span className="material-icons">picture_as_pdf</span> Ver PDF</a> : <span>Não disponível</span>}</div>
          <div className="health-item"><span>Exames</span><span className={`status-badge ${statusExames}`}>{pet.saude.exames}</span></div>
          <div className="health-item"><span>Vacinas</span><span className={`status-badge ${statusVacinas}`}>{pet.saude.vacinas}</span></div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}