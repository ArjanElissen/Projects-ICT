//
//  NewDogView.swift
//  YoutubeTutorial
//
//  Created by A.J.A.F. Elissen on 12/10/2022.
//

import SwiftUI

struct ReportView: View {
    @EnvironmentObject var dataManager: DataManager
    @State private var newDog = ""
    var body: some View {
        VStack{
            TextField("Report", text: $newDog)
            Button {
                dataManager.addReport(dogBreed: newDog)
            } label:
            { Text("Save")
            }
        }
        .padding()
    }
}

struct NewDogView_Previews: PreviewProvider {
    static var previews: some View {
        ReportView()
    }
}
