
import Vision
import Foundation
import CoreImage

let args = CommandLine.arguments
let imgPath = args[1]
let imgURL = URL(fileURLWithPath: imgPath)
guard let img = CIImage(contentsOf: imgURL) else { exit(1) }

let request = VNRecognizeTextRequest { request, error in
    guard let observations = request.results as? [VNRecognizedTextObservation] else { return }
    for obs in observations {
        let topCandidate = obs.topCandidates(1).first?.string ?? ""
        print(topCandidate)
    }
}
request.recognitionLanguages = ["zh-Hant"]

let handler = VNImageRequestHandler(ciImage: img, options: [:])
try? handler.perform([request])
