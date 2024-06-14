import { useState } from "react";
import { FlatList } from "react-native";

import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Hightlight } from "@components/Hightlight";

import { Container } from "./styles";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Groups() {
  const [groups, setGroups] = useState(["Galera da Rocket", "Amigos"]);

  return (
    <Container>
      <Header />

      <Hightlight title="Turma" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={!groups.length && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />

      <Button title="Criar nova turma" />
    </Container>
  );
}
