<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230116145649 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE message DROP FOREIGN KEY FK_B6BD307FE64A3B53');
        $this->addSql('DROP INDEX IDX_B6BD307FE64A3B53 ON message');
        $this->addSql('ALTER TABLE message CHANGE sortie_id_id sortie_id INT NOT NULL');
        $this->addSql('ALTER TABLE message ADD CONSTRAINT FK_B6BD307FCC72D953 FOREIGN KEY (sortie_id) REFERENCES sortie (id)');
        $this->addSql('CREATE INDEX IDX_B6BD307FCC72D953 ON message (sortie_id)');
        $this->addSql('ALTER TABLE participants DROP FOREIGN KEY FK_716970929D86650F');
        $this->addSql('ALTER TABLE participants DROP FOREIGN KEY FK_71697092E64A3B53');
        $this->addSql('DROP INDEX IDX_716970929D86650F ON participants');
        $this->addSql('DROP INDEX IDX_71697092E64A3B53 ON participants');
        $this->addSql('ALTER TABLE participants ADD user_id INT NOT NULL, ADD sortie_id INT NOT NULL, DROP user_id_id, DROP sortie_id_id');
        $this->addSql('ALTER TABLE participants ADD CONSTRAINT FK_71697092A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE participants ADD CONSTRAINT FK_71697092CC72D953 FOREIGN KEY (sortie_id) REFERENCES sortie (id)');
        $this->addSql('CREATE INDEX IDX_71697092A76ED395 ON participants (user_id)');
        $this->addSql('CREATE INDEX IDX_71697092CC72D953 ON participants (sortie_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE message DROP FOREIGN KEY FK_B6BD307FCC72D953');
        $this->addSql('DROP INDEX IDX_B6BD307FCC72D953 ON message');
        $this->addSql('ALTER TABLE message CHANGE sortie_id sortie_id_id INT NOT NULL');
        $this->addSql('ALTER TABLE message ADD CONSTRAINT FK_B6BD307FE64A3B53 FOREIGN KEY (sortie_id_id) REFERENCES sortie (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_B6BD307FE64A3B53 ON message (sortie_id_id)');
        $this->addSql('ALTER TABLE participants DROP FOREIGN KEY FK_71697092A76ED395');
        $this->addSql('ALTER TABLE participants DROP FOREIGN KEY FK_71697092CC72D953');
        $this->addSql('DROP INDEX IDX_71697092A76ED395 ON participants');
        $this->addSql('DROP INDEX IDX_71697092CC72D953 ON participants');
        $this->addSql('ALTER TABLE participants ADD user_id_id INT NOT NULL, ADD sortie_id_id INT NOT NULL, DROP user_id, DROP sortie_id');
        $this->addSql('ALTER TABLE participants ADD CONSTRAINT FK_716970929D86650F FOREIGN KEY (user_id_id) REFERENCES user (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE participants ADD CONSTRAINT FK_71697092E64A3B53 FOREIGN KEY (sortie_id_id) REFERENCES sortie (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_716970929D86650F ON participants (user_id_id)');
        $this->addSql('CREATE INDEX IDX_71697092E64A3B53 ON participants (sortie_id_id)');
    }
}
